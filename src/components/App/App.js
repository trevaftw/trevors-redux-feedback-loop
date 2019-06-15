import React, { Component } from 'react';
import './App.css';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
// to define different pages, need to bring in router
import { HashRouter as Router, Route } from 'react-router-dom';
//to setup a route, need to import component
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewPage from '../Review/ReviewPage';
import Five from '../Five/Five';



class App extends Component {



  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/Feeling" component={Feeling} />
          <Route exact path="/Understanding" component={Understanding} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/ReviewPage" component={ReviewPage} />
          <Route exact path="/Five" component={Five} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
