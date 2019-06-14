import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';



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
        this.props.history.push('/Review');
    }

    render() {
        return (
            <>
                <h1>How are you feeling?</h1>
                <br />
                <input type="number" placeholder="0=dropout; 11=teacher" value={this.state.feeling} onChange={this.handleChange} />
                <br /><br />
                {/* make a button component that takes you to the review page */}
                <button onClick={this.handleClick}>Next</button>

            </>
        )
    }
}

export default connect()(Feeling);