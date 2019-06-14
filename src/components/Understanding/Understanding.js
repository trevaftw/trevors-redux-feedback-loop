import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';



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
                <h1>How is your Understanding?</h1>
                <br />
                <input type="number" placeholder="0=dropout; 11=teacher" value={this.state.Understanding} onChange={this.handleChange} />
                <br /><br />
                {/* make a button component that takes you to the review page */}
                <button onClick={this.handleClick}>Next</button>

            </>
        )
    }
}

export default connect()(Understanding);