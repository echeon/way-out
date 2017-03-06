import React, { Component } from 'react';
import {
  Navigator
} from 'react-native'

import { colors, globals } from '../../styles'
import InfoView from './InfoView'
import NextView from './NextView'

export default class LineView extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Navigator
        style={globals.mainContainer}
        initialRoute={{ name: 'InfoView' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'InfoView':
              return <InfoView navigator={navigator}/>
            case 'NextView':
              return <NextView navigator={navigator}/>
          }
        }}
      />
    )
  }
}
