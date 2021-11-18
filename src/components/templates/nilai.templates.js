import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import {useNavigation} from '@react-navigation/native';
import propTypes from 'prop-types';
import Img from '../../assets';
const {bg} = Img;

const {QuisStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function NilaiTemplate(props) {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bg} resizeMode="cover" style={QuisStyle.bg}>
      <View style={QuisStyle.container}>
        <TextAtoms isi="Nilai" styles={QuisStyle.mascotTXTSpecial} />
        <TextAtoms
          isi={props.nilai}
          styles={
            props.nilai > 59
              ? QuisStyle.nilaiTXTLulus
              : QuisStyle.nilaiTXTNotLulus
          }
        />
        <View style={QuisStyle.bawah}>
          <TouchableOpacity
            style={QuisStyle.buttonNextBack}
            onPress={() => navigation.goBack()}>
            <TextAtoms isi="Selesai" styles={QuisStyle.buttonNextBackTXT} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

NilaiTemplate.propTypes = {
  data: propTypes.any,
};

NilaiTemplate.defaultProps = {
  data: null,
};

export default NilaiTemplate;
