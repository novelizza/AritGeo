import React from 'react';
import {View, Image} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import * as Progress from 'react-native-progress';

const {SplashScreenStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

const {Logo} = Img;

function SplashScreenTemplate() {
  return (
    <View style={SplashScreenStyle.container}>
      <View style={SplashScreenStyle.logoContainer}>
        <Image style={SplashScreenStyle.logo} source={Logo} />
      </View>
      <View style={SplashScreenStyle.textContainer}>
        <Progress.CircleSnail
          color={['red', 'green', 'blue']}
          duration={700}
          spinDuration={2000}
        />
        <View style={SplashScreenStyle.textBawahContainer}>
          <TextAtoms isi="Muhammad Hafidh Ma'ruf" />
          <TextAtoms isi="1701105012" />
        </View>
      </View>
    </View>
  );
}

export default SplashScreenTemplate;
