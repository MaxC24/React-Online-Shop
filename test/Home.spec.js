import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../client/src/components/Home.jsx';

const wrapper = shallow(<Home fetchItems={()=>{}}/>);

describe('<Home />', () => {
    
    it('should contain Title component', () => {
        expect(wrapper.find('Title')).to.be.defined;
    })

    it('should contain ItemListPage component', () => {
        expect(wrapper.find('ItemListPage')).to.be.defined;
    })   

    it('should contain ViewCartButtonPage component', () => {
        expect(wrapper.find('ViewCartButtonPage')).to.be.defined;
    })   

    it('should contain CartPage component', () => {
        expect(wrapper.find('CartPage')).to.be.defined;
    }) 

    it("should have a fetchItems prop", () => {
        expect(wrapper.props().fetchItems).to.be.defined;
    })
})