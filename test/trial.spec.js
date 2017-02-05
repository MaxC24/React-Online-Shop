import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Trial from '../client/src/components/Trial.jsx';
import Title from '../client/src/components/Title.jsx'
import Item from '../client/src/components/Item.jsx'

describe('trial', () => {
    it('should have one button component', ()=> {
        const wrapper = shallow(<Trial />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('should have a paragraph', ()=> {
        const wrapper = shallow(<Trial />);
        expect(wrapper.find('p')).to.have.length(1);
    })

    it('paragraph component should say: hello', ()=> {
        const wrapper = shallow(<Trial paragraph="hello"/>);
        expect(wrapper.find('p').text()).to.equal('hello');
    })
});

describe('Title', () => {

    it('should have a div', ()=> {
        const wrapper = shallow(<Title title='title'/>);
        expect(wrapper.find('div')).to.have.length(1);
    })

    it("title component's text should say 'title': TITLE", ()=> {
        const wrapper = shallow(<Title title='title'/>);
        expect(wrapper.find('#title').text()).to.equal('TITLE');
    })
});

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


    
})