import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';


class Support extends Component {
    state = {
        Support: ''
    };

    handleChange = (event) => {
        this.setState({
            Support: event.target.value
        })
    }

    handleClick = () => {
        console.log('next button');
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <>
                <Header />
                <br />
                <h1>Do you feel Supported?</h1>
                <br />
                <input type="number" min="0" max="11" placeholder="0=alone; 11=family" value={this.state.Support} onChange={this.handleChange} />
                <br /><br />
                {/* make a button component that takes you to the review page */}
                <button onClick={this.handleClick}>Next</button>
                <br /><br />
                <Review />

            </>
        )
    }
}

const mapReduxStateToProps = (ourEntireStore) => ({
    reduxState: ourEntireStore
})

export default connect(mapReduxStateToProps)(Support);