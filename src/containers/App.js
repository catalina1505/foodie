import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ApplicationRoutes from './ApplicationRoutes';

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)

export default class App extends Component {

  render() {
    return (
      <Router>
        <ApplicationRoutes/>
      </Router>
    );
  }
}

