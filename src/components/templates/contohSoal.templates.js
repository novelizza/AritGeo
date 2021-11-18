import React from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-remix-icon';
import Color from '../../styles/colors';

const {HomeStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

const {Logo, Mascot, bg} = Img;

function ContohSoalTemplate() {
  const navigation = useNavigation();
  return (
    <View style={HomeStyle.container}>
      <ImageBackground source={bg} resizeMode="cover" style={HomeStyle.bg}>
        <Image style={HomeStyle.logo} source={Logo} />
        <View style={HomeStyle.ListButton}>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('PolaBilanganContohSoal')}>
              <Icon name="apps-2-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="POLA BILANGAN" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() =>
                navigation.navigate('BarisanAritmatikaContohSoal')
              }>
              <Icon name="numbers-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="BARIS ARITMATIKA" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyle.ListButton}>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('DeretAritmatikaContohSoal')}>
              <Icon name="rhythm-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="DERET ARITMATIKA" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('BarisGeometriContohSoal')}>
              <Icon name="filter-3-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="BARIS GEOMETRI" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyle.mascotContainer}>
          <View style={HomeStyle.mascotTXTContainer}>
            <TextAtoms isi="Belajar mudah ?" styles={HomeStyle.mascotTXT} />
            <TextAtoms isi="AritGeo saja" styles={HomeStyle.mascotTXT} />
          </View>
          <Image style={HomeStyle.logo} source={Mascot} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default ContohSoalTemplate;
