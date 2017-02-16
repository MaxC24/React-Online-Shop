import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, toggleVisibility, clearCart } from '../actions';
import Cart from '../components/Cart.jsx'

//maps functions to the Cart Component props so it can dispatch the actions:
const mapDispatchToProps = dispatch => {
    return {
        //to remove the Item from the Cart when the assign buttin is clicked
        removeFromCart: (id) => {
            return (e) => {
                e.preventDefault();
                dispatch(removeFromCart(id));
            }
        },
        //to close the Cart
        closeCart: (e) => {
            e.preventDefault();
            dispatch(toggleVisibility());
        },
        //and to clear the Cart
        clearCart: (e) => {
            e.preventDefault();
            dispatch(clearCart());
            dispatch(toggleVisibility());
        }
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        visible: state.cartVisibility
    }
}

 
const CartPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)

export default CartPage;