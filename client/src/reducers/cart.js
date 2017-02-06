const initialCartState = {
    items:{},
    totalQuantity:0,
    total: 0
}

const cart = (state=initialCartState, action) => {
    //declare the new state that will be returned to replace the older
    const newCartState = Object.assign({}, state);
    switch(action.type) {
        case 'ADD_TO_CART':
            const id = action.item.id;
            //if the item already exists in the cart increase its quantity
            //else create a new one in the items object.
            if(newCartState.items[id]) {
                newCartState.items[id].quantity++;
            } else {
                newCartState.items[id] = action.item;
                newCartState.items[id].quantity = 1;
            }
            //increase the total cart quantity and total price
            newCartState.totalQuantity++;
            newCartState.total = state.total + action.item.price;
            return newCartState;
            break;
        case 'REMOVE_FROM_CART':
            //update total quantity and price then delete the item.
            const toBeDeleted = newCartState.items[action.id];
            newCartState.totalQuantity -= toBeDeleted.quantity;
            newCartState.total -= toBeDeleted.price*toBeDeleted.quantity;
            delete newCartState.items[action.id];
            return newCartState;
            break;
        case 'CLEAR_CART':
            //replace the newCartState.items object with an empty one then return the newCartState
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