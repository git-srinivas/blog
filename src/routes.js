import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'
import App from './App';
import Home from './Home';

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={App}/>
    <Route  exact path="/" component={Home}/>
  </Router>

);
export default AppRouter;
