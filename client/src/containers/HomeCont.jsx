import React from 'react';

class HomeCont extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            cart: {}
        }
    }

    render() {
        return (
            <div>
                <Title title="Sugar Sweet Chocolate Treats" />
                <ItemList />
                <Cart />
            </div>
        )
    }
}

export default HomeCont;
