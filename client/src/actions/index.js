export const populateItems = (items) => {
    return {
        type: 'POPULATE_ITEMS',
        items
    }
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
        id
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

export const fetchData = () => {
    return dispatch => {
        fetch('/data/inventory.json')
        .then(response => {
            return response.json();
        })
        .then(data=> {
            return dispatch(populateItems(data.chocolates));
        })
        .catch(()=> {
            console.log('cannot retrieve the data');
        })
    }
}