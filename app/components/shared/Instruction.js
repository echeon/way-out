import React from 'react';
import { View, Text } from 'react-native';
import { globals } from '../../styles';

const Instruction = ({ prompt }) => (
  <View style={globals.instructionBox}>
    <Text>{propmt}</Text>
  </View>
);

export default Instruction;
