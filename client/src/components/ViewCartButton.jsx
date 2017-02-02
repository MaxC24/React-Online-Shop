import React from 'react';

const ViewCartButton = ({ viewCart, ItemsQuantity }) => {

    return(
        <button id="view-cart-button" onClick={viewCart}>
            <p>VIEW CART</p>
            <p>number of items: { ItemsQuantity }</p>
        </button>
    )
}

export default ViewCartButton;