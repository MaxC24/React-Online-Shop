import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, toggleVisibility, clearCart } from '../actions';
import Cart from '../components/Cart.jsx'

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => {
            return (e) => {
                e.preventDefault();
                dispatch(removeFromCart(id));
            }
        },
        closeCart: (e) => {
            e.preventDefault();
            dispatch(toggleVisibility());
        },
        clearCart: (e) => {
            e.preventDefault();
            dispatch(clearCart());
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