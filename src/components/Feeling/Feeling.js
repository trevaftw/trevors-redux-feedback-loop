import React, { Component } from 'react';
//to run dispatch need to connect to the store
import {connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import NextButton from '../NextButton/NextButton';



class Home extends Component {

    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <br />
                <input type="number" placeholder="0=dropout; 11=teacher" />
                <br /><br />
               {/* make a button component that takes you to the review page */}
               <NextButton />
            </>
        )
    }
}

export default connect()(Home);