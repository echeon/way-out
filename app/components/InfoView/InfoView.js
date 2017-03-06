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
    this.visitNextView = this.visitNextView.bind(this)
  }

  visitNextView() {
    this.props.navigator.push({ name: 'NextView' })
  }

  render(){
    return (
      <View style={globals.flexContainer}>
        <NavigationBar title='InfoView' />
        <View>
          <TouchableOpacity onPress={this.visitNextView}>
            <Text>HELLO THIS IS THE INFO PAGE!!!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
