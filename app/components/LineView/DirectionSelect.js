import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import { colors, globals } from '../../styles';

export default class DirectionSelect extends Component {
  constructor(){
    super();
    this.goBack = this.goBack.bind(this)
  }

  goBack(){
    this.props.navigator.pop();
  }

  render(){

    const BackButton = ({ handlePress }) => (
      <TouchableOpacity onPress={handlePress} style={globals.pa1}>
        <Icon name='ios-arrow-back' size={25} color='white' />
      </TouchableOpacity>
    );

    let titleConfig = { title: 'Direction', tintColor: '#fff' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={colors.primaryColor}
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <View style={globals.flexCenter}>
          <Text style={globals.h2}>
            You can choose subway direction here
          </Text>
        </View>
      </View>
    )
  }
}
