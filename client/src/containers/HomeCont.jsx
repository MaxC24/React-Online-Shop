import React from 'react';
import Title from '../components/Title.jsx';
import ItemList from '../components/ItemList.jsx';
import Cart from '../components/Cart.jsx';

//Main container component that includes the logic of the app
class HomeCont extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            cart: {
                items: {},
                total: 0
            }
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    //GET request to fetch the chocolates data from the server
    componentDidMount() {
        //get request to fetch the data of items available
        fetch('/data/inventory.json')
        .then(response => {
            return response.json();
        })
        .then( data => {
            this.setState({
                items: data.chocolates
            })
        })
        .catch(()=> {
            console.log('There was an error fetching the data');
        })
    }

    addToCart(item) {
        return (e) => {
            e.preventDefault();
            //create a copy of the cart
            const cart = Object.assign({}, this.state.cart);
            //if the item is already present in the cart update the quantity
            if(cart['items'][item.id]) {
                cart['items'][item.id]["quantity"]++;
                
            } else {
                //else create it in the cart with quantity equal to 1
                cart['items'][item.id] = item;
                cart['items'][item.id]["quantity"] = 1;
            }
            //update the cart total price
            cart.total += item.price;
            this.setState({
                cart
            })
        }
    }

    removeFromCart(id) {
        return (e) => {
            e.preventDefault();
            //create a copy of the cart
            const cart = Object.assign({}, this.state.cart);
            //update the total before removal
            cart.total -= cart['items'][id].price*cart['items'][id].quantity;
            //delete the key-value from the cart
            delete cart['items'][id];
            this.setState({
                cart
            })
        }
    }

    clearCart(e) {
        e.preventDefault();
        //set cart state equal to the initial one
        this.setState({
            cart: {
                items: {},
                total: 0
            }
        })
    }

    render() {
        return (
            <div>
                <Title title="Sugar Sweet Chocolate Treats" />
                <ItemList 
                    items={this.state.items}
                    onClick={this.addToCart}
                />
                <Cart 
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                    clearCart={this.clearCart}
                />
            </div>
        )
    }
}

export default HomeCont;
