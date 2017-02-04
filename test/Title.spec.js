import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Title from '../client/src/components/Title.jsx';

describe("<Title />", function() {

    it("should have a div with a id 'title", function() {
        const wrapper = shallow(<Title title="Title"/>);
        expect(wrapper.find('#title')).to.have.length(1);
    })

    it("should have a props title", function() {
        const wrapper = shallow(<Title title="Title"/>);
        expect(wrapper.props().title).to.be.defined;
    })
})