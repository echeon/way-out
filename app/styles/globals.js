import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const margins = {
  ma0:  { margin: 0 },
  ma5:  { margin: 5 },
  ma10: { margin: 10 },
  mh0:  { marginHorizontal: 0 },
  mh5:  { marginHorizontal: 5 },
  mh10: { marginHorizontal: 10 },
  mv0:  { marginVertical: 0 },
  mv5:  { marginVertical: 5 },
  mv10: { marginVertical: 10 },
  mt0:  { marginTop: 0 },
  mt5:  { marginTop: 5 },
  mt10: { marginTop: 10 },
  mr0:  { marginRight: 0 },
  mr5:  { marginRight: 5 },
  mr10: { marginRight: 10 },
  mb0:  { marginBottom: 0 },
  mb5:  { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  ml0:  { marginLeft: 0 },
  ml5:  { marginLeft: 5 },
  ml10: { marginLeft: 10 },
}

const paddings = {
  pa0:  { padding: 0 },
  pa5:  { padding: 5 },
  pa10: { padding: 10 },
  ph0:  { paddingHorizontal: 0 },
  ph5:  { paddingHorizontal: 5 },
  ph10: { paddingHorizontal: 10 },
  pv0:  { paddingVertical: 0 },
  pv5:  { paddingVertical: 5 },
  pv10: { paddingVertical: 10 },
  pt0:  { paddingTop: 0 },
  pt5:  { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pr0:  { paddingRight: 0 },
  pr5:  { paddingRight: 5 },
  pr10: { paddingRight: 10 },
  pb0:  { paddingBottom: 0 },
  pb5:  { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pl0:  { paddingLeft: 0 },
  pl5:  { paddingLeft: 5 },
  pl10: { paddingLeft: 10 },
}

const headings = {
  h1: { fontSize: 40 },
  h2: { fontSize: 34 },
  h3: { fontSize: 28 },
  h4: { fontSize: 22 },
  h5: { fontSize: 16 },
}

export const globals = StyleSheet.create({
  ...margins,
  ...paddings,
  ...headings,
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 49,
  },
  flex: {
    flex: 1
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lightText: {
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    bottom: 0,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  largeButtonText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white'
  },
  brandPrimary: {
    backgroundColor: colors.brandPrimary
  },
  primaryText: {
    color: colors.brandPrimary
  },
  inactive: {
    backgroundColor: colors.inactive
  },
  map: {
    backgroundColor: colors.inactive,
    height: (deviceHeight / 3),
    width: deviceWidth
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 10,
  },
  lightDivider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  centerText: {
    textAlign: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  centeredRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
