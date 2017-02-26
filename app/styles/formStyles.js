import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const formStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.inactive,
    flex: 1,
    paddingVertical: 15
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  h3: {
    color: colors.copyMedium,
    fontSize: 22,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  h4: {
    color: colors.copyDark,
    fontSize: 20,
    fontWeight: '300',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  h5: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  h6: {
    fontSize: 16,
    fontWeight: '400',
  },
  errorContainer: {
    paddingHorizontal: 15,
  },
  errorText: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.red
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarContainer: {
    backgroundColor: 'white',
    marginVertical: 15,
    marginHorizontal: (deviceWidth - 250) / 2,
    width: 250,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImageContainer: {
    height: 120,
    alignItems: 'center'
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    padding: 20,
  },
  formField: {
    backgroundColor: 'white',
    height: 50,
    paddingTop: 5,
    marginBottom: 10,
  },
  input: {
    color: colors.copyMedium,
    fontSize: 18,
    fontWeight: '300',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  largeInput: {
    color: '#777',
    fontSize: 18,
    backgroundColor: 'white',
    fontWeight: '300',
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    height: 70,
    justifyContent: 'center',
  },
  buttonMargin: {
    marginBottom: 50
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: deviceWidth,
  },
  technology: {
    marginHorizontal: 4,
  },
  groupImageContainer: {
    height: 200,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  groupImage: {
    height: 200,
    width: deviceWidth,
    borderRadius: 3,
    padding: 20,
  },
  colorsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  colorBox: {
    flex: 1,
    height: (deviceWidth / 4) - 20,
    width: (deviceWidth / 4) - 20,
    margin: 10,
    borderWidth: 4,
  },
  slider: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  datepicker: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 3,
  },
  pickerButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'white',
    marginHorizontal: 5
  }
})

export default formStyles
