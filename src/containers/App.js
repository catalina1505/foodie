import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ApplicationRoutes from './ApplicationRoutes';

import { library } from '@fortawesome/fontawesome-svg-core'
 import {  faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import {  faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'

library.add(faHeartSolid);
library.add(faHeartRegular);

export default class App extends Component {

  render() {
    return (
      <Router>
        <ApplicationRoutes/>
      </Router>
    );
  }
}

