import React, { Component } from 'react';
import {
  View,
  Text,
 } from 'react-native';

import NavigationBar from 'react-native-navbar';
import { colors, globals } from '../../styles';

export default class InfoView extends Component {
  constructor(){
    super();
  }

  render(){
    let titleConfig = { title: 'Info', tintColor: colors.primaryColorText };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={colors.primaryColor}
        />
        <View style={globals.flexCenter}>
          <Text style={globals.h2}>
            This is information page
          </Text>
        </View>
      </View>
    )
  }
}
