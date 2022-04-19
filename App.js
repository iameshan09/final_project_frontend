import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppView from './src/modules/AppViewContainer';
import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}

export default App;
