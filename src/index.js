import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.js';
import GetAPIKey from './GetAPIKey.js';
import EditData from './EditData.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/getapikey">Get a key</Link>
    </nav>
    
      <Route exact path="/" component={App}/>
      <Route path="/getapikey" component={GetAPIKey}/>
      <Route path="/edit" component={EditData}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
