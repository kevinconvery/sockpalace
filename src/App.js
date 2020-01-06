import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Sales from './components/Sales/Sales';
import Deals from './components/Deals/Deals';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
