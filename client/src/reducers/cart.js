const initialCartState = {
    items:{},
    totalQuantity:0,
    total: 0
}


const cart = ( state=initialCartState, action) => {
    const newCartState = Object.assign({}, state);
    switch(action.type) {
        case 'ADD_TO_CART':
            newCartState.items[action.id] = action.item;
            newCartState.items[action.id].quantity = ++;
            newCartState.totalQuantity++;
            newCartState.total = state.total + action.price;
            return newCartState;
        case 'REMOVE_FROM_CART':
            newCartState = Object.assign({}, state);
            delete newCartState.items[action.id];
            return newCartState;
        default:
            return state;
   }
}

export default cart;