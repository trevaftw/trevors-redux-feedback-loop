import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
import { Link } from 'react-router-dom';
import Header from '../Header/Header';



class Home extends Component {

    render() {
        return (
            <>
            <Header />
            <br /> <br />
            How are you <Link to="/Feeling">feeling</Link>?
            </>
        )
    }
}

export default connect()(Home);