import React from 'react';
import Title from '../components/Title.jsx';
import ItemList from '../components/ItemList.jsx';
import Cart from '../components/Cart.jsx';

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
            console.log('404')
        })
    }

    addToCart(item) {
        return (e) => {
            e.preventDefault();
            const cart = Object.assign({}, this.state.cart);
            if(cart['items'][item.id]) {
                cart['items'][item.id]["quantity"]++;
                
            } else {
                cart['items'][item.id] = item;
                cart['items'][item.id]["quantity"] = 1;
            }
            cart.total += item.price;
            e.preventDefault();
            this.setState({
                cart
            })
        }
    }

    removeFromCart(id) {
        return (e) => {
            e.preventDefault();
            const cart = Object.assign({}, this.state.cart);
            cart.total -= cart['items'][id].price*cart['items'][id].quantity;
            delete cart['items'][id];
            this.setState({
                cart
            })
        }
    }

    clearCart(e) {
        e.preventDefault();
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
