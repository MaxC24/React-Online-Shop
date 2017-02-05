import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import ChocolateShopApp from './reducers';
import HomeContainer from './containers/HomeContainer.jsx';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
let store = createStore(ChocolateShopApp, composeEnhancers(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>,
    document.getElementById('app')
)