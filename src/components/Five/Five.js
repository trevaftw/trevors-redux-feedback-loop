import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Five extends Component {
    render() {
        return (
            <>
                <h1>THANK YOU~!~</h1>
                <br /><br />
                <Link to='/'>Would you like to play a game?</Link>
            </>
        )
    }
}

export default Five;