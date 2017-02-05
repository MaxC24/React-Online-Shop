// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { expect } from 'chai';

// import Cart from '../client/src/components/Cart.jsx';
// import { chocolates } from '../public/data/inventory.json';

// const props = {
//     cart: {
//         items: {},
//         total: 0
//     },
//     removeFromCart: function(id){
//         delete this.cart.items[id];
//     },
//     clearCart: function(){
//         this.cart = {
//             items: {},
//             total: 0
//         }
//     },
//     closeCart: function(){
//         this.visible = !this.visible;
//     },
//     visibile: false
// }

// describe("<Cart />", function() {

//     beforeEach((done)=> {
//         const milk = chocolates[1];
//         const white = chocolates[3];
//         props.cart.items[milk.id] = Object.assign({}, milk);
//         props.cart.items[milk.id].quantity = 3;
//         props.cart.items[white.id] = Object.assign({}, white);
//         props.cart.items[white.id].quantity = 2;
//         props.cart.total += 3*milk.price + 2*white.price;
//         done();
//     })

//     const wrapper = mount(<Cart 
//         cart={props.cart}
//         removeFromCart={props.removeFromCart}
//         clearCart={props.clearCart}
//         closeCart={props.closeCart}
//         visible={props.visible}
//     />);
    

//     it('should have a cart props', function() {
//         expect(wrapper.props().cart).to.be.defined;
//     })

//     it('should have two buttons to clear and close the cart', function() {
//         //console.log(wrapper.find('button').nodes);
//         Object.keys(wrapper).forEach( key => console.log(key));
//         console.log(wrapper.setProps(props));
//         console.log(wrapper.setProps(props));
//         expect(wrapper.find('button')).to.have.length(2);
//     })

//     it('should show the show the right prices of the items', function() {
//         expect(wrapper.props().cart.items[2].price).to.be.equal(2.50);
//     })

//     it('should have the right total price', function(){
//         expect(wrapper.props().cart.total).to.be.equal(38);
//     })
// })