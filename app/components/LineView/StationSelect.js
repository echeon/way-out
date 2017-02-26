import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';
import { colors, globals } from '../../styles';
import NavigationBar from '../shared/NavigationBar'
import BackButton from '../shared/BackButton'

export default class StationSelect extends Component {
  constructor(){
    super();
    this.goBack = this.goBack.bind(this)
  }

  goBack(){
    this.props.navigator.pop();
  }

  render(){
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title='Station'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <View style={globals.flexCenter}>
          <Text style={globals.h2}>
            You can choose the station here.
          </Text>
        </View>
      </View>
    )
  }
}
