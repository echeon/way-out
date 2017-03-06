import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';
import { colors, globals } from '../../styles';
import NavigationBar from '../shared/NavigationBar';
import BackButton from '../shared/BackButton';

export default class StationSelect extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this)
    this.visitResult = this.visitResult.bind(this)
  }

  goBack() {
    this.props.navigator.pop();
  }

  visitResult() {
    this.props.navigator.push({ name: 'ResultView' })
  }

  render() {
    const stations = [
      'stop1',
      'stop2',
      'stop3',
      'stop4',
    ]

    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title='Station'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <View style={globals.flexCenter}>
          {stations.map(station => {
            return (
              <TouchableOpacity key={station} onPress={this.visitResult}>
                <Text style={globals.h2}>{station}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}
