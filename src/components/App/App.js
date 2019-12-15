import React, { Component } from 'react';
//STYLE
import './App.css';
//REDUX
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
//REACT-ROUTER
import { HashRouter as Router, Route } from 'react-router-dom';
//ROUTES
import Home from '../pages/Home/Home';
import Feeling from '../pages/Feeling/Feeling';
import Understanding from '../pages/Understanding/Understanding';
import Support from '../pages/Support/Support';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review';
import ThankYou from '../pages/ThankYou/ThankYou';
import Admin from '../pages/Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" exact component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/thankYou" component={ThankYou} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
