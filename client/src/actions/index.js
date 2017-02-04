export const populateItems = (items) => {
    type: 'POPULATE_ITEMS',
    items
}

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        item: item
    };
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id,
        quantity
    }
}

export const toggleVisibility = () => {
    return {
        type: 'TOGGLE_VISIBILITY'
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}