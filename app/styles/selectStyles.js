import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const selectStyles = {
  backgroundColor: 'white',
  borderBottomWidth: 0,
  borderTopWidth: 0,
  justifyContent: 'center',
  paddingLeft: 10,
}

export default selectStyles
