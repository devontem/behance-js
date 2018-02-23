import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Provider>
          <Router history={customHistory}>
            <h1>Test</h1>
          </Router>
        </Provider>
    );
  }
}

export default App;