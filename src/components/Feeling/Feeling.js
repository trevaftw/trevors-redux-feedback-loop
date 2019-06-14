import React, { Component } from 'react';
//to run dispatch need to connect to the store
import {connect } from 'react-redux';
//to link to first page, import link component
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Home extends Component {

    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <br /><br />
            </>
        )
    }
}

export default connect()(Home);