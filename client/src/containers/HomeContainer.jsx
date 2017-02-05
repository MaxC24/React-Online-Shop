import React from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';
import Home from '../components/Home.jsx';

const mapDispatchToProps= dispatch => {
    return{
        fetchItems: ()=> {
            dispatch(fetchData());
        }
    }
}

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;