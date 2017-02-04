const initialCartState = {
    items:{},
    totalQuantity:0,
    total: 0
}


const cart = ( state=initialCartState, action) => {
    const newCartState = Object.assign({}, state);
    switch(action.type) {
        case 'ADD_TO_CART':
            let currentItem = newCartState.items[action.item.id];
            if(currentItem) {
                currentItem.quantity++;
            } else {
                currentItem = action.item;
                currentItem.quantity = 0;
            }
            newCartState.totalQuantity++;
            newCartState.total = state.total + action.item.price;
            return newCartState;
        case 'REMOVE_FROM_CART':
            newCartState.totalQuantity -= newCartState.items[action.id].quantity;
            delete newCartState.items[action.id];
            return newCartState;
        default:
            return state;
   }
}

export default cart;