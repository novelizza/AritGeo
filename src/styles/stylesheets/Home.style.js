import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.THEME_COLOR,
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 25,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  ListButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '50%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: Color.GREEN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
    paddingVertical: 5,
  },
  buttonTXT: {
    color: Color.CLOUD_COLOR,
  },
  mascotContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  mascotTXTContainer: {
    height: '100%',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'flex-end',
    flex: 1,
  },
  mascotTXT: {
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: Color.THEME_COLOR,
    borderRadius: 4,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});
