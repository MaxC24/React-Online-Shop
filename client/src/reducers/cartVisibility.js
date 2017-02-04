const cartVisibility = (state=false, action) => {
    switch(action.type) {
        case 'TOGGLE_VISIBILITY':
            return !state;
            break;
        default:
            return state;
            break;
    }
}

export default cartVisibility;