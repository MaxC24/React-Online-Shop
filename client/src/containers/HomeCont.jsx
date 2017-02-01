import React from 'react';
import Title from '../components/Title.jsx';
import ItemList from '../components/ItemList.jsx';
import Cart from '../components/Cart.jsx';

class HomeCont extends React.Component {

    constructor() {
        super();
        this.state = {
            items: {},
            cart: {}
        }
    }

    //GET request to fetch the chocolates data from the server
    componentDidMount() {
        fetch('/data/inventory.json')
        .then(response => {
            return response.json();
        })
        .then(items => {
            this.setState({
                items
            })
        })
        .catch(()=> {
            console.log('404')
        })
    }

    render() {
        return (
            <div>
                <Title title="Sugar Sweet Chocolate Treats" />
                <ItemList 
                    items={this.state.items}
                />
                <Cart 
                    cart={this.state.cart}
                />
            </div>
        )
    }
}

export default HomeCont;
