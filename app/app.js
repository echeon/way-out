import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Landing from './components/Landing'
import configureStore from './store/configureStore'

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    const store = configureStore()
    
    return (
      <Provider store={store}>
        <Landing />
      </Provider>
    )
  }
}
