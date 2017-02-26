import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
 } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import NavigationBar from 'react-native-navbar'
import { colors, globals } from '../../styles'
import lines from '../../data/trains'

export default class LineSelect extends Component{
  constructor(){
    super();
    this.visitDirectionSelect = this.visitDirectionSelect.bind(this)
  }

  visitDirectionSelect() {
    this.props.navigator.push({ name: 'DirectionSelect' })
  }

  render() {
    const LineListItem = ({line}) => (
      <View style={{flexDirection: 'row'}}>
        {line.trains.map(train => (
          <SubwaySymbol name={train.name} color={line.color} textColor={line.textColor} />
        ))}
      </View>
    )

    const SubwaySymbol = ({name, color, textColor}) => (
      <TouchableOpacity
        key={`${name}-train`}
        onPress={this.visitDirectionSelect}
        style={{backgroundColor: color, margin: 5, height: 50, width: 50, borderRadius: 50, justifyContent: 'center'}}
      >
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: textColor, backgroundColor: 'transparent'}}>{name}</Text>
      </TouchableOpacity>
    )

    let titleConfig = { title: 'Line', tintColor: colors.primaryColorText };

    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={colors.primaryColor}
        />
        <ScrollView>
          {lines.map(line => <LineListItem line={line} />)}
        </ScrollView>
      </View>
    )
  }
}
