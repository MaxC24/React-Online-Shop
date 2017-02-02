import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
    let key = 0;
    const items = cart['items'];
    return(
        <div>
            <h2>Cart</h2>
            { Object.keys(items).map(id => {
                return (
                    <li key={ key++ }>
                        <p>{ items[id].type }</p>
                        <p>${ items[id].price }</p>
                        <p>quantity: { items[id].quantity }</p>
                        <button onClick={ removeFromCart(id) }> remove </button> 
                    </li>
                )
            })}
            <p>total: ${cart.total}</p>
            <button onClick={clearCart}>Clear</button>
            <button>Close</button>
        </div>
    )
}

export default Cart;