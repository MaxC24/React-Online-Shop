import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList.jsx';
import { addToCart, populateItems, fetchData } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => {
            return (e) => {
                e.preventDefault();
                dispatch(addToCart(item));
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const ItemListPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default ItemListPage;