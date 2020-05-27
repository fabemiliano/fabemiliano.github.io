import React from 'react';
import { store } from './store/store'
import { Provider } from 'react-redux'
import Input from './components/Input'

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Input />
        </Provider>
      </div>
    );
  }
}

export default App;