import React, { Component } from 'react';
import {
  View,
  Text,
 } from 'react-native';

import NavigationBar from '../shared/NavigationBar';
import { colors, globals } from '../../styles';

export default class InfoView extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <View style={globals.flexContainer}>
        <NavigationBar title='Info' />
        <View style={globals.flexCenter}>
          <Text style={globals.h2}>
            This is information page
          </Text>
        </View>
      </View>
    )
  }
}
