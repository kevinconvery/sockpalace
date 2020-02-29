import React from 'react'
import PropTypes from 'prop-types'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Sales from '../Sales/Sales'
import Deals from '../Deals/Deals'
import Register from '../Auth/Register/Register'
import Login from '../Auth/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {Provider} from 'react-redux'

const Controller = ({ store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

Controller.propTypes = {
  store: PropTypes.object.isRequired
}

export default Controller;

