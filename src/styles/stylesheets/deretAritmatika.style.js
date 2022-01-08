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
  descSpesial: {
    fontSize: 18,
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
  },
  descSpesial2: {
    color: Color.GREEN2_COLOR,
    textAlign: 'justify',
  },
  descSpesialContainer: {
    marginHorizontal: 10,
  },
  descSpesial2Container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  descSpesial3Container: {
    width: '50%',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    borderColor: Color.GREEN2_COLOR
  },
  descSpesial2Wrap: {
    width: '50%',
    justifyContent: 'center',
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 95,
    marginLeft: 80,
  },
  soalContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  kotakRumus2:{
    backgroundColor: Color.BLACK_COLOR,
    width: '90%',
    alignSelf: 'center',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    flexDirection: 'row',
    marginBottom: 100,
  },
  kotakRumus3:{
    backgroundColor: Color.BLACK_COLOR,
    width: '90%',
    alignSelf: 'center',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 5
  },
  descRumus: {
    fontSize: 18,
    color: Color.WHITE_COLOR,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
