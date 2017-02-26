import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const calendarStyles = StyleSheet.create({
  h2: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center'
  },
  h4: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    paddingVertical: 4,
  },
  h5: {
    fontSize: 12,
    fontWeight: '300',
    paddingHorizontal: 5,
  },
  emptyText: {
    padding: 20,
    flexDirection: 'column'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: colors.inactive,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingVertical: 15,
  },
  arrow: {
    marginLeft: 20
  },
  sectionHeader: {
    alignItems: 'center',
    backgroundColor: colors.inactive,
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  sectionHeaderText: {
    color: colors.brandPrimaryDark,
    fontSize: 18,
    fontWeight: '300',
  }
})

export default calendarStyles
