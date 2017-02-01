import React from 'react';

const Item = ({ item, onClick }) => {

    return (
        <li>
            <div>{item.type}</div>
            <div>{item.description}</div>
            <div>${item.price}</div>
            <button onClick={ onClick(item) }>Add to Cart</button>
        </li>
    )
}

export default Item;