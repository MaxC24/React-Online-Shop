import { combineReducers } from 'redux';
import cart from './cart';
import items from './items';
import cartVisibility from './cartVisibility';

const ChocolateShopApp = combineReducers({
    cart,
    items,
    cartVisibility
});

export default ChocolateShopApp;