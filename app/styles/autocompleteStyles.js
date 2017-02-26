import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const autocompleteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputContainer: {
    backgroundColor: 'white',
    height: 44,
    borderTopColor: 'white',
    borderBottomColor: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 18,
    height: 28,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 7.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4.5,
  },
  poweredContainer: {
    alignItems: 'center',
    backgroundColor: colors.inactive,
    justifyContent: 'center',
  },
  powered: {
    marginTop: 15,
  },
  listView: {
    flex: 1,
  },
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  }
})

export default autocompleteStyles
