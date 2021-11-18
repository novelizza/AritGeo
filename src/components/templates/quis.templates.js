import React from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const {QuisStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

const {Logo, bg} = Img;

function QuisTemplate() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ImageBackground source={bg} resizeMode="cover" style={QuisStyle.bg}>
      <View style={QuisStyle.container}>
        <TextAtoms isi="Quis" styles={QuisStyle.mascotTXTSpecial} />
        <Image style={QuisStyle.logo} source={Logo} />
        <View style={QuisStyle.ListButton}>
          <View style={QuisStyle.buttonContainer}>
            <TouchableOpacity
              style={QuisStyle.button}
              onPress={() => {
                navigation.navigate('Questions'),
                  dispatch({
                    type: 'SET_STATESOAL',
                    inputValue: 0,
                    inputType: 'halaman',
                  });
              }}>
              <TextAtoms isi="Quis 1" styles={QuisStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
          <View style={QuisStyle.buttonContainer}>
            <TouchableOpacity
              style={QuisStyle.button}
              onPress={() => {
                navigation.navigate('Questions'),
                  dispatch({
                    type: 'SET_STATESOAL',
                    inputValue: 1,
                    inputType: 'halaman',
                  });
              }}>
              <TextAtoms isi="Quis 2" styles={QuisStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={QuisStyle.ListButton}>
          <View style={QuisStyle.buttonContainer}>
            <TouchableOpacity
              style={QuisStyle.button}
              onPress={() => {
                navigation.navigate('Questions'),
                  dispatch({
                    type: 'SET_STATESOAL',
                    inputValue: 2,
                    inputType: 'halaman',
                  });
              }}>
              <TextAtoms isi="Quis 3" styles={QuisStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
          <View style={QuisStyle.buttonContainer}>
            <TouchableOpacity
              style={QuisStyle.button}
              onPress={() => {
                navigation.navigate('Questions'),
                  dispatch({
                    type: 'SET_STATESOAL',
                    inputValue: 3,
                    inputType: 'halaman',
                  });
              }}>
              <TextAtoms isi="Quis 4" styles={QuisStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={QuisStyle.ListButtonSpesial}>
          <View style={QuisStyle.buttonContainer}>
            <TouchableOpacity
              style={QuisStyle.button}
              onPress={() => {
                navigation.navigate('Questions'),
                  dispatch({
                    type: 'SET_STATESOAL',
                    inputValue: 4,
                    inputType: 'halaman',
                  });
              }}>
              <TextAtoms isi="Quis 5" styles={QuisStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default QuisTemplate;
