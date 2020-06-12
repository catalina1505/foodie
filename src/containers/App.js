import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ApplicationRoutes from './ApplicationRoutes';

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

export default class App extends Component {

  render() {
    return (
      <Router>
        <ApplicationRoutes/>
      </Router>
    );
  }
}

