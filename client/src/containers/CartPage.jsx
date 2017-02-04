import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, toggleVisibility } from '../actions';
import Cart from '../components/Cart.jsx'

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (e) => {
            e.preventDefault();
            return (id) => {
                dispatch(addToCart(item));
            }
        },
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
    mapDispatchToProps,
    mapStateToProps
)(Cart)

export default CartPage;