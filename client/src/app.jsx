import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import ChocolateShopApp from './reducers';
import HomeContainer from './containers/HomeContainer.jsx';

//apply the thunk middleware when creating the store for Async actions:
let store = createStore(ChocolateShopApp, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>,
    document.getElementById('app')
)