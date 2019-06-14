import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect } from 'react-redux';

class App extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'TEST_DISPATCH'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <button onClick={this.handleClick}>Test dispatch</button>
        </header>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
