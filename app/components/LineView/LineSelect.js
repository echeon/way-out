import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ListView,
  Text,
  TouchableOpacity,
 } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors, globals, subwaySymbols } from '../../styles'
import lines from '../../data/trains'
import NavigationBar from '../shared/NavigationBar'

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
      <View style={[globals.pa5, globals.flexContainer, globals.row, {borderBottomWidth: 1, borderColor: colors.dividerColor}]}>
        {line.trains.map(train => (
          <SubwaySymbol
            key={`${train.name}-train`}
            name={train.name}
            color={line.color}
            textColor={line.textColor} />
        ))}
      </View>
    )

    const SubwaySymbol = ({name, color, textColor}) => (
      <TouchableOpacity
        onPress={this.visitDirectionSelect}
        style={[subwaySymbols.button, {backgroundColor: color}]}
      >
        <Text style={[subwaySymbols.text, {color: textColor}]}>{name}</Text>
      </TouchableOpacity>
    )

    return (
      <View style={globals.mainContainer}>
        <NavigationBar title='Line' />
        <View style={{height: 20, backgroundColor: 'yellow'}}>
          <Text>Select the train</Text>
        </View>
        <ScrollView
          contentInset={{top: 0, left: 0, bottom: 49, right: 0}}
          automaticallyAdjustContentInsets={false}
        >
          {lines.map(line => <LineListItem key={line.name} line={line} />)}
        </ScrollView>
      </View>
    )
  }
}
