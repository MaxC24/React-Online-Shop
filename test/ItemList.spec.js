import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ItemList from '../client/src/components/ItemList.jsx';

describe('<ItemList />', ()=> {

    const props= {
        items: [
            {
                id: 0
            }
        ],
        addToCart: ()=> {
            return null;
        }
    };
    const wrapper = shallow(<ItemList 
        items={props.items} 
        addToCart={props.addToCart}/>
    );

    it("should have a component with ID 'item-list", () => {
        expect(wrapper.find('#item-list')).to.have.length(1);
    })

    it("should have a Item component", () => {
        expect(wrapper.find('Item')).to.have.length(1);
    })

    it("should have two Items component after adding one", () => {
        wrapper.setProps({items: [ ...props.items, { id: 1}]});
        expect(wrapper.find('Item')).to.have.length(2);
    })
})