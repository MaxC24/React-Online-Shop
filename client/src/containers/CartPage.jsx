import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, toggleVisibility } from '../actions';
import Cart from '../components/Cart.jsx'

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (e) => {
            e.preventDefault();
            return (id) => {
                dispatch(removeFromCart(id));
            }
        },
        closeCart: (e) => {
            e.preventDefault();
            return () => {
                dispatch(toggleVisibility());
            }
        }
    }
}

const mapStateToProps = state => {
    cart: state.cart
}

 
const CartPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)

export default CartPage;