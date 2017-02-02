import React from 'react';
import Item from './Item.jsx';

const ItemList = ({ items, onClick }) => {
    return (
        <div id="item-list">
            {
                items.map(item => {
                    return <Item 
                        key={item.id}
                        item={item}
                        onClick={onClick}
                    />
                })
            }
        </div>
    )
}

export default ItemList;