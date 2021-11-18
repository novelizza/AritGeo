import React from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';

const {PolaBilanganStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;
const {bg} = Img;

function PolaBilanganContohSoalTemplate() {
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={PolaBilanganStyle.bg}>
      <ScrollView
        style={PolaBilanganStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms
          isi="Contoh 1 :"
          styles={[PolaBilanganStyle.judul, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Barisan pola persegi panjang 2, 6, 12, 20, 30,… maka pola ke 12 bernilai?"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Jawab :"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Rumus pola perseginya adalah : Un = n(n+1)"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Maka Pola ke 12 adalah : U₁₂ = 12(12 + 1) = 156"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Contoh 2 :"
          styles={[PolaBilanganStyle.judul, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Diketahui pola bilangan 3, 6, 10, 15...., Berapa nilai pola ke 8?"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Jawab :"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Pola bilangan diatas berbentuk baris segitiga, maka rumusnya adalah :"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <View style={PolaBilanganStyle.nodeWrap}>
          <TextAtoms
            isi="Un = "
            styles={[PolaBilanganStyle.desc, {alignSelf: 'center'}]}
          />
          <View>
            <TextAtoms
              isi="n(n + 1)"
              styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="-------------"
              styles={PolaBilanganStyle.descSpesial}
            />
            <TextAtoms
              isi="2"
              styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
            />
          </View>
        </View>
        <TextAtoms
          isi="Maka Pola Ke – 8 adalah :"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <View style={PolaBilanganStyle.nodeWrap}>
          <TextAtoms
            isi="Un = "
            styles={[PolaBilanganStyle.desc, {alignSelf: 'center'}]}
          />
          <View>
            <TextAtoms
              isi="8(8 + 1)"
              styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="-------------"
              styles={PolaBilanganStyle.descSpesial}
            />
            <TextAtoms
              isi="2"
              styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
            />
          </View>
        </View>
        <View style={PolaBilanganStyle.nodeWrap}>
          <TextAtoms
            isi="Un = ⁷²⁄₂ = 36"
            styles={[PolaBilanganStyle.desc, {alignSelf: 'center'}]}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default PolaBilanganContohSoalTemplate;
