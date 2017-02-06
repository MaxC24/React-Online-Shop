import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Cart from '../client/src/components/Cart.jsx';

describe('<Cart />', () => {
    const props = {
        cart: {
            items: {},
            total: 0
        },
        removeFromCart: function(id){
            delete this.cart.items[id];
        },
        clearCart: function(){
            this.cart = {
                items: {},
                total: 0
            }
        },
        closeCart: function(){
            this.visible = !this.visible;
        },
        visibile: false
    }

    const wrapper = mount(<Cart 
        cart={props.cart} 
        removeFromCart={props.removeFromCart}
        clearCart={props.clearCart}
        closeCart={props.closeCart}
        visible={props.visible}
    />)
   
    
    it('Should have a cart prop', () =>{
        expect(wrapper.props().cart).to.be.defined;
    })
    it('cart prop should be a object', () =>{
        expect(wrapper.props().cart).to.be.an('object');
    })
    it('Should have a removeFromCart prop', () =>{
        expect(wrapper.props().removeFromCart).to.be.defined;
    })
    it('removeFromCart prop should be a function', () =>{
        expect(wrapper.props().removeFromCart).to.be.a('function');
    })
    it('Should have a clearCart prop', () =>{
        expect(wrapper.props().clearCart).to.be.defined;
    })

    it('clearCart prop should be a function', () =>{
        expect(wrapper.props().clearCart).to.be.a('function');
    })

    it('Should have a closeCart prop', () =>{
        expect(wrapper.props().closeCart).to.be.defined;
    })

    it('closeCart prop should be a function', () =>{
        expect(wrapper.props().closeCart).to.be.a('function');
    })

    it('Should have a visible prop', () =>{
        expect(wrapper.props().visible).to.be.defined;
    })

})