import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goat from './goat_small.jpg';


class Five extends Component {
    render() {
        return (
            <>
                <h1>THANK YOU~!~</h1>
                <br /><br />
                <Link to='/'>Would you like to play a game?</Link>
                <br /><br />
                <img src={goat} alt="goat"></img>
            </>
        )
    }
}

export default Five;