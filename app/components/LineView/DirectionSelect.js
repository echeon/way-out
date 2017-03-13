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

    const list2 = [
      {
        title: 'Appointments',
        icon: 'av-timer'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
    ]

    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title='Direction'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <InstructionBar prompt='Select the train' />
        <List>
          {
            list2.map((item, i) => (
              <ListItem
                rightTitle="right title"
                subtitle="subtitle"
                onPress={this.visitStationSelect}
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                />
            ))
          }
        </List>
      </View>



    )
  }
}
