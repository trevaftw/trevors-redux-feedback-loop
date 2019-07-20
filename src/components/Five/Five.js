import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import goat from './goat_small.jpg';


class Five extends Component {
    render() {
        return (
            <>
                <h1>Thank you for the feedback!</h1>
                <br /><br />
                <Link to='/'>Would you like to submit feedback again?</Link>
                <br /><br />
                {/* <img src={goat} alt="goat"></img> */}
            </>
        )
    }
}

export default Five;