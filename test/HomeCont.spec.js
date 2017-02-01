import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import HomeCont from '../client/src/containers/HomeCont.jsx';

describe('<HomeCont />', function() {
    it('should exist', function() {
        expect(HomeCont).to.be.defined;
    });

    it('Should have an initial items state equal to an empy object', function(){
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.state().items).to.equal([]);
    })

    it('Should have an initial cart state equal to an empy object', function(){
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.state().cart).to.equal([]);
    })

    it('should contain an <Title/> component', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.find(Title)).to.have.length(1);
    });

    it('should contain an <ItemList/> component', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.find(ItemList)).to.have.length(1);
    });

    it('should contain an <Cart/> component', function() {
        const wrapper = mount(<HomeCont/>);
        expect(wrapper.find(ItemList)).to.have.length(1);
    });
}) 