import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
    let key = 0;
    return(
        <div>
            <h2>Cart</h2>
            { Object.keys(cart['items']).map(id => {
                return (
                    <li key={ key++ }>
                        <p>{ cart['items'][id].type }</p>
                        <p>{ cart['items'][id].price }</p>
                        <p>{ cart['items'][id].quantity }</p>
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