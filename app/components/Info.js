import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../styles/colors';
import { globals } from '../styles';

export default class Line extends Component{
  constructor(){
    super();
  }

  render(){
    let titleConfig = { title: 'Info', tintColor: '#fff' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
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
