import React, { Component } from 'react';
import {
  Navigator
} from 'react-native'
import { colors, globals } from '../../styles'
import TrainSelect from './TrainSelect'
import DirectionSelect from './DirectionSelect'
import StationSelect from './StationSelect'
import PlanSelect from './PlanSelect'
import ResultView from './ResultView'

export default class LineView extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Navigator
        style={globals.mainContainer}
        initialRoute={{ name: 'TrainSelect' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'TrainSelect':
              return <TrainSelect navigator={navigator}/>
            case 'DirectionSelect':
              return <DirectionSelect navigator={navigator}/>
            case 'StationSelect':
              return <StationSelect navigator={navigator}/>
            case 'PlanSelect':
              return <PlanSelect navigator={navigator}/>
            case 'ResultView':
              return <ResultView navigator={navigator}/>
          }
        }}
      />
    )
  }
}
