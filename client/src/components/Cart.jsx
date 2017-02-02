import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart, closeCart }) => {
    let key = 0;
    const items = cart['items'];
    return(
        <div className="modal">
            <div className="cart">
                <h2>Cart</h2>
                { Object.keys(items).map(id => {
                    return (
                        <div className="cart-item" key={ key++ }>
                            <div>{ items[id].type }</div>
                            <div>${ items[id].price }</div>
                            <div>quantity: { items[id].quantity }</div>
                            <button onClick={ removeFromCart(id) }> remove </button> 
                        </div>
                    )
                })}
                <p>total: ${cart.total}</p>
                <button id="clear" onClick={clearCart}>Clear</button>
                <button onClick={ closeCart }>Close</button>
            </div>
        </div>
    )
}

export default Cart;