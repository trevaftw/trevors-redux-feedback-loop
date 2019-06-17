import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';



class Feeling extends Component {
    //store the information in local state before dispatching to the store
    state = {
        feeling: ''
    };

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleClick = () => {
        // console.log('next button');
        //send the local state to the store
        this.props.dispatch({type: 'UPDATE_STORE', payload: this.state})
        //then go to the next page
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <>
                <Header />
                <br />
                <h1>How are you feeling?</h1>
                <br />
                <input type="number" min="0" max="11" placeholder="0=Drained; 11=Unstoppable" value={this.state.feeling} onChange={this.handleChange} />
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


export default connect(mapReduxStateToProps)(Feeling);