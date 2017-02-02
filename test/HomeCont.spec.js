import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import fetchMock from 'fetch-mock';

import HomeCont from '../client/src/containers/HomeCont.jsx';

fetchMock.get('*', {
  "chocolates" : [
    {
      "description": "Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas.",
      "id": 1,
      "type": "milk",
      "price": 1.50
    },
    {
      "description": "Dark chocolate has the most chocolate liquor and the most intense chocolate flavor. Look for bitter, roasted, fruit, earthy, woodsy and/or nutty notes.",
      "id": 2,
      "type": "dark",
      "price": 2.50
    },
    {
      "description": "White chocolate lacks chocolate liquor, and includes the milk and vanilla used in milk chocolate. These ingredients give it a variety of sweet flavor notes, including cream, milk, honey, vanilla, caramel and/or fruit.",
      "id": 3,
      "type": "white",
      "price": 0.50
    },
    {
      "description": "Treat Grandma to this fine bar of sugar free chocolate",
      "id": 4,
      "type": "sugar free",
      "price": 1
    }
  ]
});

describe('<HomeCont />', function() {
    it('should exist', function() {
        expect(HomeCont).to.be.defined;
    });

    it('Should have an initial items state equal to an array', function(){
        const wrapper = mount(<HomeCont/>);
        expect(Array.isArray(wrapper.state().items)).to.equal(true);
    })

    it('Should have a an item states initial length equal to 0', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.state().items).to.have.length(0);
    })

    it('Should have an initial cart state equal to an bject', function(){
        const wrapper = mount(<HomeCont/>);
        expect(typeof wrapper.state().cart).to.equal('object');
    })

    it('should contain an <Title/> component', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.find("Title")).to.have.length(1);
    });

    it('should contain an <ItemList/> component', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.find("ItemList")).to.have.length(1);
    });

    it('should contain an <Cart/> component', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.find('Cart')).to.have.length(1);
    });

    describe('GET request', function(){

        it('Should have a item state length equal to 4', function(done){
            const wrapper = mount(<HomeCont/>);
            setTimeout(function() {
                expect(wrapper.state().items).to.have.length(4);
                done()
            }, 0);
        });

        it('The ID of the third item in the items state should be 3', function(){
            const wrapper = mount(<HomeCont/>);
            setTimeout(function() {
                expect(wrapper.state().items[3].id).to.be.equal(3);
                done()
            }, 0);
        })

        it('And the type equal to "white"' , function(){
            const wrapper = mount(<HomeCont/>);
            setTimeout(function() {
                expect(wrapper.state().items[3].type).to.be.equal('white');
                done()
            }, 0);
        })
    })


}) 

