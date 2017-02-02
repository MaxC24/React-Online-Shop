import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Cart from '../client/src/components/Cart.jsx';

const props = {
    cart: {
        items: {},
        total: 0
    }
}

describe("<Cart />", function() {
    it('should have a cart props', function() {
        const wrapper = shallow(<Cart cart={props.cart}/>);
        expect(wrapper.props().cart).to.be.defined;
    })

    it('should have two buttons to clear and close the cart', function() {
        const wrapper = shallow(<Cart cart={props.cart}/>);
        expect(wrapper.find('button')).to.have.length(2);
    })
})