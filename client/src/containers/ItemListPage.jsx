import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList.jsx';
import { addToCart, populateItems } from '../actions';

const mapDispatchToProps = dispatch => {
    onClick: (e) => {
        e.preventDefault();
        return (item) => {
            dispatch(addToCart(item));
        }
    },
    fetchItems: ()=> {
        fetch('/data/inventory.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            dispatch(populateItems(data.chocolates));
        })
        .catch(()=> {
            console.log('There was an error fetching the data');
        })
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