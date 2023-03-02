
import './App.css';

import {Button} from "react-bootstrap";
import '../src/assets/css/custom.css';
import React, { Component, Fragment } from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './route/AppRoute';

class App extends Component {
  render() {
    return (
     
      <Fragment>
        <BrowserRouter>
        <AppRoute />         
        </BrowserRouter>

      </Fragment>
    )
  }
}

export default App;
