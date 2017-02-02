import React from 'react';

const Item = ({ item, onClick }) => {

    return (
        <div className="item">
            <div><p>{item.type}</p><p>{item.description}</p></div>
            <div><p>${item.price}</p>
            <button onClick={ onClick(item) }>Add to Cart</button>
            </div>
        </div>
    )
}

export default Item;