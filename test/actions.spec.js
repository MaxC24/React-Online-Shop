import { expect } from 'chai';
import { populateItems, addToCart, removeFromCart, toggleVisibility, clearCart, fetchData} from '../client/src/actions';

describe('ACTIONS', () => {
    describe('populateItems', () => {
        it("It's a function that should return an object", ()=> {
            expect(populateItems()).to.be.an('object');
        })

        it("It's a function that should return an object with type equal to: POPULATE_ITEMS", ()=> {
            expect(populateItems().type).to.equal('POPULATE_ITEMS');
        })
    })

    describe('addToCart', () => {
        it("It's a function that should return an object", ()=> {
            expect(addToCart()).to.be.an('object');
        })
        it("It's a function that should return an object with type equal to: ADD_TO_CART", ()=> {
            expect(addToCart().type).to.equal('ADD_TO_CART');
        })
    })

    describe('removeFromCart', () => {
        it("It's a function that should return an object", ()=> {
            expect(removeFromCart()).to.be.an('object');
        })
    
        it("It's a function that should return an object with type equal to: REMOVE_FROM_CART", ()=> {
            expect(removeFromCart().type).to.equal('REMOVE_FROM_CART');
        })
    })

    describe('toggleVisibility', () => {
        it("It's a function that should return an object", ()=> {
            expect(toggleVisibility()).to.be.an('object');
        })

        it("It's a function that should return an object with type equal to: TOGGLE_VISIBILITY", ()=> {
            expect(toggleVisibility().type).to.equal('TOGGLE_VISIBILITY');
        })

    })
    describe('clearCart', () => {
        it("It's a function that should return an object", ()=> {
            expect(clearCart()).to.be.an('object');
        })
        it("It's a function that should return an object with type equal to: CLEAR_CART", ()=> {
            expect(clearCart().type).to.equal('CLEAR_CART');
        })
    })

    describe('fetchData', () => {
        it("It's a function that should return an function", ()=> {
            expect(fetchData()).to.be.a('function');
        })
    })

})