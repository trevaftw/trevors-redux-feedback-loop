import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Review from '../Review/Review';

class ReviewPage extends Component {

    render() {
        return (
            <>
                <Header />
                <Review />
            </>
        )
    }
}

const mapReduxStateToProps = (ourEntireStore) => ({
    reduxState: ourEntireStore
})

export default connect(mapReduxStateToProps)(ReviewPage);