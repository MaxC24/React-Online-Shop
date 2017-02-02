import React, { PropTypes } from 'react';

const Cart = ({ cart, removeFromCart, clearCart, closeCart }) => {
    let key = 0;
    const items = cart['items'];
    return(
        <div className="modal">
            <div className="cart">
                <h2>Cart</h2>
                {/* loop through the state object cart item and render the list of items in the cart */}
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
                <div className="cart-buttons">
                    <button id="clear" onClick={clearCart}>Clear</button>
                    <button onClick={ closeCart }>Close</button>
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    closeCart: PropTypes.func.isRequired
}

export default Cart;