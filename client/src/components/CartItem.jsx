import React, { PropTypes } from 'react';

//Displays the items in the cart
const CartItem = ({item, removeFromCart}) => {
    return(
        <div className="cart-item">
            <div>{ item.type }</div>
            <div>${ item.price }</div>
            <div>quantity: { item.quantity }</div>
            <button onClick={ removeFromCart(item.id) }> remove </button> 
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default CartItem;