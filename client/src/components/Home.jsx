import React from 'react';
import CartPage from '../containers/CartPage.jsx';
import ItemListPage from '../containers/ItemListPage.jsx';
import Title from './Title.jsx'; 
import ViewCartButtonPage from '../containers/ViewCartButtonPage.jsx';

const Home = () => {
    return(
        <div>
            <Title title="Sugar Sweet Chocolate Treats"/>
            <ItemListPage />
            <ViewCartButtonPage />
            <CartPage />
        </div>
    )
}

export default Home;