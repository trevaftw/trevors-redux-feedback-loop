import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';



class Understanding extends Component {
    state = {
        Understanding: ''
    };

    handleChange = (event) => {
        this.setState({
            Understanding: event.target.value
        })
    }

    handleClick = () => {
        console.log('next button');
        this.props.history.push('/Support');
    }

    render() {
        return (
            <>
                <Header />
                <br />
                <h1>How is your Understanding?</h1>
                <br />
                <input type="number" min="0" max="11" placeholder="0=dropout; 11=teacher" value={this.state.Understanding} onChange={this.handleChange} />
                <br /><br />
                {/* make a button component that takes you to the review page */}
                <button onClick={this.handleClick}>Next</button>
                <br /><br />
                <Review />
                <br /><br />
                {/* this is how i can target it */}
                {JSON.stringify(this.props.reduxState.feedbackReducer, null, 2)}
                {/* {this.props.reduxState.feedbackReducer.feeling} */}
            </>
        )
    }
}

const mapReduxStateToProps = (ourEntireStore) => ({
    reduxState: ourEntireStore
})

export default connect(mapReduxStateToProps)(Understanding);