import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ItemList from '../client/src/components/ItemList.jsx';

const props = {
    items: []
}

describe("<ItemList />", function() {

    it('should have items props', function() {
        const wrapper = shallow(<ItemList items={props.items} />);
        expect(wrapper.props().items).to.be.defined;
    })

    it('should have a Item Component', function(){
        const wrapper = shallow(<ItemList items={props.items}/>);
        expect(wrapper.find("Item")).to.be.defined;
    })
})