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
    color: Color.GREEN2_COLOR,
    fontSize: 30,
  },
  desc: {
    fontSize: 18,
    color: Color.GREEN2_COLOR,
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
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
    flex: 1,
  },
  descSpesialLain: {
    fontSize: 18,
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
  },
  descSpesialIsi: {
    fontSize: 18,
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  nodeContainer: {
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between'
  },
  nodeContainer3: {
    flexDirection: 'row',
    marginHorizontal: 100,
    justifyContent: 'space-between'
  },
  nodeContainer2: {
    flexDirection: 'row',
    alignSelf: 'center'
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
  image:{
    alignSelf: 'center',
    backgroundColor: Color.WHITE_COLOR,
    borderRadius: 10,
  },
  image2:{
    alignSelf: 'center',
    backgroundColor: Color.WHITE_COLOR,
    borderRadius: 10,
    width: '90%', 
    alignSelf:'center', 
    resizeMode: 'contain'
  }
});
