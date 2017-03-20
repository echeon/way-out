import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';
import { colors, globals } from '../../styles';
import NavigationBar from '../shared/NavigationBar'
import BackButton from '../shared/BackButton'

export default class Result extends Component {
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
          title='Result'
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <View style={[globals.flex, {flexDirection: 'row'}]}>
          <View style={{flex: 1, backgroundColor: '#EEE'}}>
          </View>
          <View style={{backgroundColor: 'yellow', width: 60}}>
          </View>
          <View style={{backgroundColor: 'black', width: 120}}>
          </View>
        </View>
      </View>
    )
  }
}
