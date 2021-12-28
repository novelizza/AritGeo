import React from 'react';
import {View, ScrollView, ImageBackground, Image} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import PolaBilanganTemplate from './polaBilangan.templates';
import DeretAritmatikaTemplates from './deretAritmatika.templates';
import BarisanAritmatikaTemplates from './barisanAritmatika.templates';
import BarisanGeometriTemplates from './barisanGeometri.templates';

const {HomeStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;
const {bg, panah} = Img;


function RangkumanSatuinTemplate() {

  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={HomeStyle.bg2}>
      <ScrollView
        style={HomeStyle.container2}
        showsVerticalScrollIndicator={false}>
       <View style={HomeStyle.rangkumanBox}>
        <PolaBilanganTemplate/>
        </View>
        <View style={HomeStyle.rangkumanBox}>
        <DeretAritmatikaTemplates/>
        </View>
        <View style={HomeStyle.rangkumanBox}>
        <BarisanAritmatikaTemplates/>
        </View>
        <View style={HomeStyle.rangkumanBox}>
        <BarisanGeometriTemplates/>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default RangkumanSatuinTemplate;
