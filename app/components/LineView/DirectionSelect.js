import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';
import { colors, globals } from '../../styles';
import NavigationBar from '../shared/NavigationBar'
import BackButton from '../shared/BackButton'
import InstructionBar from '../shared/InstructionBar'

import { List, ListItem } from 'react-native-elements'

export default class DirectionSelect extends Component {
  constructor(){
    super();
    this.goBack = this.goBack.bind(this)
    this.visitStationSelect = this.visitStationSelect.bind(this)
  }

  goBack(){
    this.props.navigator.pop()
  }

  visitStationSelect() {
    this.props.navigator.push({ name: 'StationSelect' })
  }

  render(){
    const directions = ['Uptown', 'Downtown']

    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title='Direction'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <InstructionBar prompt='Select the train' />
        <List>
          {
            directions.map((d, i) => (
              <ListItem
                onPress={this.visitStationSelect}
                key={i}
                title={d}
              />
            ))
          }
        </List>
      </View>
    )
  }
}
