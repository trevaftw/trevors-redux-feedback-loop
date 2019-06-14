import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Review from '../Review/Review';

class ReviewPage extends Component {

    handleClick = () => {
        this.props.history.push('/Five')
    }

    render() {
        return (
            <>
                <Header />
                <Review />
            </>
        )
    }
}

export default connect()(ReviewPage);