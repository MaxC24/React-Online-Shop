import React from 'react';
import { connect } from 'react-redux';
import ViewCartButton from '../components/ViewCartButton.jsx';
import { toggleVisibility } from '../actions';

const mapStateToProps = state => {
    return {
        itemsQuantity: state.cart.totalQuantity
    }
}

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