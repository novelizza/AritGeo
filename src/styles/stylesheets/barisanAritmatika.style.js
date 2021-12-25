import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    paddingTop: 10,
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
  desc2: {
    fontSize: 18,
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
    marginBottom: 100,
    marginLeft: 10,
  },
  descSpesial: {
    fontSize: 18,
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
  },
  descRumus: {
    fontSize: 18,
    color: Color.WHITE_COLOR,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  descSpesial2: {
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
  },
  kotakRumus:{
    backgroundColor: Color.BLACK_COLOR,
    width: '60%',
    alignSelf: 'center',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  kotakRumus2:{
    backgroundColor: Color.BLACK_COLOR,
    width: '60%',
    alignSelf: 'center',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 350
  },
  kotakRumus3:{
    backgroundColor: Color.BLACK_COLOR,
    width: '90%',
    alignSelf: 'center',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  descSpesialContainer: {
    marginHorizontal: 10,
  },
  descSpesial2Container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  descSpesial3Container: {
    width: '50%',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    borderColor: Color.GREEN2_COLOR
  },
  descSpesial2Wrap: {
    width: '70%',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  descSpesial3Wrap: {
    width: '70%',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 400,
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 95,
    marginLeft: 80,
    borderColor: Color.GREEN2_COLOR
  },
  soalContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
});
