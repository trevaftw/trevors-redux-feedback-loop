import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Review extends Component {
    render() {
        return (
            <>
                REVIEW
            </>
        )
    }
}

export default connect()(Review);