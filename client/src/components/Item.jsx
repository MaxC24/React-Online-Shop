import React, { PropTypes } from 'react';

//Component to display the Items in the ItemList Component
const Item = ({ item, onClick }) => {

    return (
        <div className="item">
            <div><p>{item.type}</p><p>{item.description}</p></div>
            <div><p>${item.price.toFixed(2)}</p>
            <button onClick={ onClick(item) }>Add to Cart</button>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Item;