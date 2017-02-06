import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ViewCartButton from '../client/src/components/ViewCartButton.jsx';

describe('ViewCartButton', () => {

    let visible;
    const viewCart = () => {
         return () => {
             visible = !visible;
         }
    }

    beforeEach((done) => {
        visible = false;
        done();
    })

    const wrapper = shallow(<ViewCartButton itemsQuantity={0} viewCart={viewCart}/>)

    it('should have a button', ()=> {
        expect(wrapper.find('button')).to.have.length(1);
    })

    it("onClick makes the cart visible", ()=> {
        wrapper.find("#view-cart-button").simulate('click');
        expect(visible).to.be.true;
    })

    it("Its second paragraph is: number of items: 0", () => {
        expect(wrapper.find('p').at(1).text()).to.equal("number of items: 0");
    })
});