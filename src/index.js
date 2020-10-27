import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import AlertState from './Context/Alert/Alert_state';
import GithubState from './Context/Github/Github_State';
import App from './App';

ReactDOM.render(
  <GithubState>
    <AlertState>
      <Router>
        <App />
      </Router>
    </AlertState>
  </GithubState>,
  document.getElementById('root')
);


