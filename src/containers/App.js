import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ApplicationRoutes from './ApplicationRoutes';

export default class App extends Component {

  render() {
    return (
      <Router>
        <ApplicationRoutes/>
      </Router>
    );
  }
}

