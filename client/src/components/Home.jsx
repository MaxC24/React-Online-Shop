import React, { PropTypes } from 'react';
import CartPage from '../containers/CartPage.jsx';
import ItemListPage from '../containers/ItemListPage.jsx';
import Title from './Title.jsx'; 
import ViewCartButtonPage from '../containers/ViewCartButtonPage.jsx';
import { fetchData } from '../actions';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
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

Home.propTypes = {
    fetchItems: PropTypes.func.isRequired
}

export default Home;