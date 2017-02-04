// import React from 'react';
// import ReactDom from 'react-dom';
// import HomeCont from './containers/HomeCont.jsx';


// ReactDom.render(<HomeCont />, document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import ChocolateShopApp from './reducers';
import HomeCont from './containers/HomeCont.jsx';

let store = createStore(ChocolateShopApp);

render(
    <Provider store={store}>
        <HomeCont />
    </Provider>,
    document.getElementById('app')
)