import React, { PropTypes } from 'react';
import CartItem from './CartItem.jsx';

//Cart is the modal component that displays the content of the cart
//loop through the state object cart items passing them down to Cart Item.
const Cart = ({ cart, removeFromCart, clearCart, closeCart, visible }) => {
    let key = 0;
    const items = cart['items'];
    if(!visible) {  return null }
    return(
        <div className="modal">
            <div className="cart">
                <h2>Cart</h2>
                { Object.keys(items).map(id => {
                    return <CartItem key={key++} item={items[id]} removeFromCart={removeFromCart} />
                })}
                <p>total: ${cart.total.toFixed(2)}</p>
                <div className="cart-buttons">
                    <button id="clear" onClick={ clearCart }>Clear</button>
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
    closeCart: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
}

export default Cart;