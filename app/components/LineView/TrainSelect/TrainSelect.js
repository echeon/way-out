import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ListView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globals, subwaySymbols } from '../../../styles';
import trains from '../../../assets/data';
import NavigationBar from '../../shared/NavigationBar';
import InstructionBar from '../../shared/InstructionBar';

export default class TrainSelect extends Component{
  constructor(props){
    super(props);
    this.visitDirectionSelect = this.visitDirectionSelect.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  visitDirectionSelect() {
    this.props.navigator.push({ name: 'DirectionSelect' });
  }

  handlePress(train) {
    return e => {
      this.props.selectTrain(train);
      this.visitDirectionSelect();
    };
  }

  render() {
    const SubwaySymbol = ({name, color, textColor}) => (
      <TouchableOpacity
        onPress={this.handlePress(name)}
        style={[subwaySymbols.button, {backgroundColor: color}]}
      >
        <Text style={[subwaySymbols.text, {color: textColor}]}>{name}</Text>
      </TouchableOpacity>
    )

    return (
      <View style={globals.flexContainer}>
        <NavigationBar title='Train' />
        <InstructionBar prompt='Select the train' />
        <View style={[globals.flex, globals.row, {paddingHorizontal: 20}]}>
          <ScrollView
            contentContainerStyle={[globals.row, {alignSelf: 'center', flexWrap: 'wrap'}]}
            automaticallyAdjustContentInsets={false}>
            {trains.map(train => {
              return (
                <SubwaySymbol
                  key={`${train.name}-train`}
                  name={train.name}
                  color={train.color}
                  textColor={train.textColor} />
              )
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}
