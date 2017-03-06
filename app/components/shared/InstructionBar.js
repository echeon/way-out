import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, globals } from '../../styles';

const styles = StyleSheet.create({
  instructionBar: {
    padding: 5,
    backgroundColor: colors.white,
    backgroundColor: colors.primaryColorLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.dividerColor,
  },
  text: {
    textAlign: 'center',
    color: colors.textColorPrimary,
  },
})

const InstructionBar = ({ prompt }) => (
  <View style={styles.instructionBar}>
    <Text style={styles.text}>{prompt}</Text>
  </View>
);

export default InstructionBar;
