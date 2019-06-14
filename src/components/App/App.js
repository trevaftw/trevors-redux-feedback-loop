import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//to run dispatch need to connect to the store
import {connect } from 'react-redux';
// to define different pages, need to bring in router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//to setup a route, need to import component
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';



class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Feeling" component={Feeling} />
        <Route exact path="/Understanding" component={Understanding} />
        <Route exact path="/Support" component={Support} />
        <Route exact path="/Comments" component={Comments} />
        <Route exact path="/Review" component={Review} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
