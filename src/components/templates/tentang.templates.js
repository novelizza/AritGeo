import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';

const {TentangStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;
const {Logo, bg} = Img;

function TentangTemplate() {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={TentangStyle.bg}>
      <View style={TentangStyle.container}>
        <View style={TentangStyle.logoContainer}>
          <Image style={TentangStyle.logo} source={Logo} />
        </View>
        <View style={TentangStyle.textBawahContainer}>
          <TextAtoms
            isi="Nama : Muhammad Hafidh Ma'ruf"
            styles={TentangStyle.textBawah}
          />
          <TextAtoms isi="NIM : 1701105012" styles={TentangStyle.textBawah} />
          <TextAtoms
            isi="Jurusan : Pendidikan Matematika"
            styles={TentangStyle.textBawah}
          />
          <TextAtoms isi="" styles={TentangStyle.textBawah} />
          <TextAtoms
            isi="Aritgeo adalah Aplikasi berbasis android yang dikembangkan untuk membantu pembelajaran matematika baik disekolah maupun diluar sekolah."
            styles={TentangStyle.textBawah}
          />
          <TextAtoms isi="" styles={TentangStyle.textBawah} />
          <TextAtoms isi="Software :" styles={TentangStyle.textBawah} />
          <TextAtoms
            isi="   1. Framework : React Native"
            styles={TentangStyle.textBawah}
          />
          <TextAtoms
            isi="   2. Text Editor : Visual Studio Code"
            styles={TentangStyle.textBawah}
          />
          <TextAtoms isi="" styles={TentangStyle.textBawah} />
          <TextAtoms isi="Backsound :" styles={TentangStyle.textBawah} />
          <TextAtoms
            isi="   1. Happy & Girly"
            styles={TentangStyle.textBawah}
          />
          <TextAtoms isi="   2. Solo Guitar" styles={TentangStyle.textBawah} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default TentangTemplate;
