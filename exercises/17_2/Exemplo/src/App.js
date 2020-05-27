import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './components/List';
import InputsList from './components/InputList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;