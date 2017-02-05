const initialCartState = {
    items:{},
    totalQuantity:0,
    total: 0
}

const cart = (state=initialCartState, action) => {
    const newCartState = Object.assign({}, state);
    switch(action.type) {
        case 'ADD_TO_CART':
            const id = action.item.id;
            if(newCartState.items[id]) {
                newCartState.items[id].quantity++;
            } else {
                newCartState.items[id] = action.item;
                newCartState.items[id].quantity = 1;
            }
            newCartState.totalQuantity++;
            newCartState.total = state.total + action.item.price;
            return newCartState;
            break;
        case 'REMOVE_FROM_CART':
            const currentItem = newCartState.items[action.id];
            newCartState.totalQuantity -= currentItem.quantity;
            newCartState.total -= currentItem.price*currentItem.quantity;
            delete newCartState.items[action.id];
            return newCartState;
            break;
        case 'CLEAR_CART':
            newCartState.items = {};
            newCartState.total = newCartState.totalQuantity = 0;
            return newCartState;
            break;
        default:
            return state;
            break;
   }
}

export default cart;