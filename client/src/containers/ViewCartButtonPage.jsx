import React from 'react';
import { connect } from 'react-redux';
import ViewCartButton from '../components/ViewCartButton.jsx';
import { toggleVisibility } from '../actions';

//Prop to display on the button how many items has been added to it
const mapStateToProps = state => {
    return {
        itemsQuantity: state.cart.totalQuantity
    }
}

//dispatch an action to toggle the Cart visibility
const mapDispatchToProps = dispatch => {
    return {
        viewCart: () => {
            return (e) => {
                e.preventDefault();
                dispatch(toggleVisibility());
            }
        }
    }
}

const ViewCartButtonPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewCartButton)

export default ViewCartButtonPage;