import React from 'react';
import { store } from './store/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;