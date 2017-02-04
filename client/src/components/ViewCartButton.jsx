import React, { PropTypes } from 'react';

const ViewCartButton = ({ viewCart, itemsQuantity }) => {
    return(
        <button id="view-cart-button" onClick={ viewCart() }>
            <p>VIEW CART</p>
            <p>number of items: { itemsQuantity }</p>
        </button>
    )
}

ViewCartButton.propTypes = {
    viewCart: PropTypes.func.isRequired,
    itemsQuantity: PropTypes.number.isRequired
}

export default ViewCartButton;