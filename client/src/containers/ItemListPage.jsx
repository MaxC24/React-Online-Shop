import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList.jsx';
import { addToCart, populateItems, fetchData } from '../actions';

//Props passed down to the ItemLIstComponent
const mapDispatchToProps = dispatch => {
    return {
        // dispatch and action to add the selected item to the cart.items object 
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