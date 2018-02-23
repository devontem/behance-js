import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./containers/store";
import createBrowserHistory from 'history/createBrowserHistory';

import MainContainer from './containers/MainContainer';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={customHistory}>
            <Route exact path="/" component={MainContainer} />
          </Router>
        </Provider>
    );
  }
}

export default App;