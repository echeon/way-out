import React, { Component } from 'react';
import {
  Navigator
} from 'react-native'

import { colors, globals } from '../../styles'
import LineSelect from './LineSelect'
import DirectionSelect from './DirectionSelect'
import StationSelect from './StationSelect'

export default class LineView extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'LineSelect' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'LineSelect':
              return <LineSelect navigator={navigator}/>
            case 'DirectionSelect':
              return <DirectionSelect navigator={navigator}/>
            case 'StationSelect':
              return <StationSelect navigator={navigator}/>
          }
        }}
      />
    )
  }
}
