import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import TodoApp from './components/TodoApp'
const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
