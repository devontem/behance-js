import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./containers/store";
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainContainer from './containers/MainContainer';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={customHistory}>
          	<MuiThemeProvider>
            	<Route path="/" component={MainContainer} />
            </MuiThemeProvider>
          </Router>
        </Provider>
    );
  }
}

export default App;