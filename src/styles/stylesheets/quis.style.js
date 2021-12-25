import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  ListButtonSpesial: {
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
    height: 50,
    backgroundColor: Color.GREEN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
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
  },
  mascotTXTSpecial: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 50,
    color: Color.BLUE_COLOR,
  },
  questionsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  questionsAtasTXT: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: Color.GREEN2_COLOR,
  },
  questionsSoal: {
    fontSize: 20,
    color: Color.GREEN2_COLOR,
    marginTop: 25,
    marginBottom: 10,
  },
  soalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginBottom: 5,
  },
  jawabanTXT: {
    flex: 1,
    fontWeight: 'bold',
    color: Color.GREEN2_COLOR,
    fontSize: 16,
  },
  bawah: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: 20,
  },
  buttonNextBack: {
    width: 100,
    height: 45,
    backgroundColor: Color.BLUE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonNextBackTXT: {
    color: Color.CLOUD_COLOR,
  },
  nilaiTXTLulus: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 60,
    color: Color.GREEN_COLOR,
  },
  nilaiTXTNotLulus: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 60,
    color: Color.TEST_COLOR,
  },
});
