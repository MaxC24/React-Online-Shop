import React, { PropTypes } from 'react';
import Item from './Item.jsx';

const ItemList = ({ items, addToCart }) => {

    return (
        <div id="item-list">
            {
                items.map(item => {
                    return <Item 
                        key={item.id}
                        item={item}
                        onClick={ addToCart } 
                    />
                })
            }
        </div>
    )
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
    addToCart: PropTypes.func.isRequired
}

export default ItemList;