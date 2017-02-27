import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export const subwaySymbols = StyleSheet.create({
  button: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  }
})
