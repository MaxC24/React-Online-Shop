import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Title from '../client/src/components/Title.jsx'

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