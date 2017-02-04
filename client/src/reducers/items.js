const items = (state=[], action) => {
    switch(action.type) {
        case 'POPULATE_ITEM_LIST':
            return action.items;
        default:
            return state;
    }
}

export default items;