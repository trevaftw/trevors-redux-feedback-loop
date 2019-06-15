import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <Link to="/">Want to start over?</Link>
                <br /><br/>
            </>
        )
    }
}

export default Header;