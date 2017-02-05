import React from 'react';
import CartPage from '../containers/CartPage.jsx';
import ItemListPage from '../containers/ItemListPage.jsx';
import Title from './Title.jsx'; 
import ViewCartButtonPage from '../containers/ViewCartButtonPage.jsx';
import { fetchData } from '../actions';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentWillMount() {
        this.props.fetchItems()
    }

    render() {
        return(
            <div>
                <Title title="Sugar Sweet Chocolate Treats"/>
                <ItemListPage />
                <ViewCartButtonPage />
                <CartPage />
            </div>
        )
    } 
}

export default Home;