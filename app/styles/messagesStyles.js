import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const messagesStyles = StyleSheet.create({
  h5: {
    fontSize: 12,
    fontWeight: '700'
  },
  h6: {
    color: colors.bodyTextGray,
    fontSize: 12,
    fontWeight: '300',
    fontWeight: '300',
    marginLeft: 10,
    marginLeft: 10,
  },
  h4: {
    fontSize: 16,
    color: '#9B9B9B',
    fontStyle: 'italic',
    fontWeight: '300',
  },
  messageText: {
    fontSize: 16,
    fontWeight: '300'
  },
  arrowContainer: {
    flex: 0.5,
    alignItems: 'flex-end',
    paddingRight: 25,
  },
  divider: {
    borderBottomColor: colors.inactive,
    borderBottomWidth: 1,
    height: 0,
    width: deviceWidth * 0.95,
  },
  navContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 50,
  },
  inputBox: {
    marginBottom: 50,
    height: 60,
    left: 0,
    right: 0,
    backgroundColor: '#F3EFEF',
    backgroundColor: colors.inactive,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 8,
    flex: 1,
    marginRight: 5,
    fontSize: 14,
    borderColor: '#E0E0E0',
    margin: 10,
    borderColor: '#b4b4b4',
    borderRadius: 8,
    color: colors.bodyText,
    backgroundColor: 'white',
  },
  buttonActive: {
    flex: 0.4,
    backgroundColor: "#E0514B",
    backgroundColor: colors.brandPrimary,
    borderRadius: 6,
    justifyContent: 'center',
    margin: 10,
  },
  buttonInactive: {
    flex: 0.4,
    backgroundColor: "#eeeeee",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 6,
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  submitButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  inactiveButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#999'
  },
  flexCentered: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 8
  }
})

export default messagesStyles
