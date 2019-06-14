import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';



class Home extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'TEST_DISPATCH' })
    }

    render() {
        return (
            <>
            <Header />
            <br />
            <button onClick={this.handleClick}>Test dispatch</button>
            <br /> <br />
            How are you <Link to="/Feeling">feeling</Link>?
            </>
        )
    }
}

export default connect()(Home);