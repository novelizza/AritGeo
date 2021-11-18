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
  judul: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Color.BLACK_COLOR,
    fontSize: 30,
  },
  desc: {
    fontSize: 18,
    color: Color.BLACK_COLOR,
    textAlign: 'justify',
    margin: 10,
  },
  descSpesialContainer: {
    margin: 10,
  },
  descSpesialContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  descSpesialContainer3: {
    alignItems: 'center',
    width: '90%',
  },
  descSpesial: {
    fontSize: 18,
    color: Color.BLACK_COLOR,
    textAlign: 'justify',
    flex: 1,
  },
  descSpesialLain: {
    fontSize: 18,
    color: Color.BLACK_COLOR,
    textAlign: 'justify',
  },
  descSpesialIsi: {
    fontSize: 18,
    color: Color.BLACK_COLOR,
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  nodeContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  nodeContainerSpesial: {},
  nodeWrapContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeWrapSpesialContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 0,
  },
  nodeWrap: {
    flexDirection: 'row',
  },
  node: {
    height: 21,
    width: 21,
    borderRadius: 21 / 2,
    backgroundColor: Color.BLUE_COLOR,
  },
  nodeNotActive: {
    height: 21,
    width: 21,
    borderRadius: 21 / 2,
  },
});
