import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';


import Item from '../client/src/components/Item.jsx'

describe('Item', () => {

    const cart = [];

    const props = {
        item: {
            type: 'chocolate',
            price: 1.50,
            description: 'nice'
        },
        onClick:(item) => {
            return () => {
                cart.push(item);
            }
        }
    }

    const wrapper = shallow(<Item item={{}} onClick={(e) => e}/>)

    beforeEach(function(done){
        wrapper.setProps(props);
        done();
    })

    it('should have a item prop', ()=> {
        expect(wrapper.props().items).to.be.defined;
    })

    it("onClick should add item to the cart", () => {
        wrapper.find('button').simulate('click');
        expect(cart[0].type).to.equal('chocolate'); 
    })

    it("should have 3 paragraphs", ()=> {
        expect(wrapper.find('p')).to.have.length(3);
    })
})
