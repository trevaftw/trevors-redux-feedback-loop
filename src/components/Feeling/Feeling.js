import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';



class Feeling extends Component {
    state = {
        feeling: ''
    };

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleClick = () => {
        console.log('next button');
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <>
                <Header />
                <br />
                <h1>How are you feeling?</h1>
                <br />
                <input type="number" placeholder="0=Drained; 11=Unstoppable" value={this.state.feeling} onChange={this.handleChange} />
                <br /><br />
                {/* make a button component that takes you to the review page */}
                <button onClick={this.handleClick}>Next</button>
                <br /><br />
                <Review />

            </>
        )
    }
}

export default connect()(Feeling);