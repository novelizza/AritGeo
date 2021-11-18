import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 200,
    height: 200,
  },
  textBawahContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  textBawah: {
    color: Color.BLACK_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
