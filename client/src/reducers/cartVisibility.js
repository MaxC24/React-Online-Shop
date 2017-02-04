const cartVisibility = (state=false, action) => {
    switch(action.type) {
        case 'TOGGLE_VISIBILITY':
            return !state;
    }
}

export default cartVisibility;