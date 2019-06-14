import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';



class Comments extends Component {
    state = {
        Comments: ''
    };

    handleChange = (event) => {
        this.setState({
            Comments: event.target.value
        })
    }

    handleClick = () => {
        console.log('next button');
        this.props.dispatch({type: 'UPDATE_STORE', payload: this.state})
        this.props.history.push('/ReviewPage');
    }

    render() {
        return (
            <>
                <Header />
                <br />
                <h1>What Comments do you have?</h1>
                <br />
                <textarea rows="4" cols="50" value={this.state.Comments} onChange={this.handleChange} placeholder="How did we do today?"></textarea>
                <br /><br />
                {/* make a button component that takes you to the review page */}
                <button onClick={this.handleClick}>Next</button>
                <br /><br />
                <Review />

            </>
        )
    }
}

export default connect()(Comments);