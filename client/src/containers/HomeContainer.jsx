import React from 'react';
import { fetchData } from '../actions';
import { connect } from 'react-redux';
import Home from '../components/Home.jsx';

//Dispatch the action to fetch the data from the server
//and passes it down to the Home Component that will run it in a componentDidMount Function
const mapDispatchToProps = dispatch => {
    return{
        fetchItems: ()=> {
            dispatch(fetchData());
        }
    }
}

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;