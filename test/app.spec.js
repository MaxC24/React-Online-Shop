import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../client/src/app.jsx';

describe('<App />', function() {
    it('should exist', function() {
        expect(App).to.be.defined;
    });
}) 