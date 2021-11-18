import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.THEME_COLOR,
  },
  logoContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 25,
  },
  textBawahContainer: {
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
