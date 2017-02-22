import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'
import { globals } from './styles'
import Landing from './components/Landing'

export default class App extends Component {
  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return <Landing navigator={navigator}/>
          }
        }}
      />
    )
  }
}
