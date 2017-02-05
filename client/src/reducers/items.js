const items = (state=[], action) => {
    switch(action.type) {
        case 'POPULATE_ITEMS':
            return action.items;
        default:
            return state;
    }
}

export default items;