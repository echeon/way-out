import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const activityStyles = StyleSheet.create({
  h4: {
    color: colors.bodyText,
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  h5: {
    color: colors.bodyText,
    fontSize: 15,
    fontWeight: '300',
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 14,
    paddingBottom: 4,
    paddingHorizontal: 10,
    fontWeight: '300',
    fontStyle: 'italic',
    color: colors.bodyText,
  },
  messageText: {
    color: colors.bodyText,
    marginLeft: 50,
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '300',
  },
  circle: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 7.5,
    height: 15,
    marginHorizontal: 10,
    width: 15,
  }
})

export default activityStyles
