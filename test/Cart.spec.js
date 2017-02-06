import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

// import Cart from '../client/src/components/Cart.jsx';

// describe('<Cart />', () => {
//     const props = {
//         cart: {
//             items: {},
//             total: 0
//         },
//         removeFromCart: function(id){
//             delete this.cart.items[id];
//         },
//         clearCart: function(){
//             this.cart = {
//                 items: {},
//                 total: 0
//             }
//         },
//         closeCart: function(){
//             this.visible = !this.visible;
//         },
//         visibile: false
//     }

//     const wrapper = shallow(<Cart 
//         cart={props.cart} 
//         removeFromCart={props.removeFromCart}
//         clearCart={props.clearCart}
//         closeCart={props.closeCart}
//         visible={props.visible}
//     />)
   
    
//     it('Should have a button Component with "button" ID', () =>{
//         expect(wrapper.find('#clear')).to.have.length(1);
//     })
// })