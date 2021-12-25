import React from 'react';
import {View, ScrollView, ImageBackground, Image} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';

const {PolaBilanganStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;
const {bg, segitiga} = Img;

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
          isi="Rumus pola perseginya adalah : Uₙ = n(n+1)"
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
            isi="Uₙ = "
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
            isi="Uₙ = "
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
            isi="Uₙ = ⁷²⁄₂ = 36"
            styles={[PolaBilanganStyle.desc, {alignSelf: 'center'}]}
          />
        </View>

        <TextAtoms
          isi="Contoh 3 :"
          styles={[PolaBilanganStyle.judul, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Tentukan suku ke-n dari barisan bilangan 1,4,10,19,31,46,... dengan menggunakan segitiga pascal!"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Jawab :"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <Image source={segitiga} style={PolaBilanganStyle.image}/>
        <TextAtoms
          isi="Selisih terakhir bilangan diatas adalah +1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Selisih terakhir bilangan diatas adalah +3. Dengan menggunakan rumus segitiga Pascal diperoleh: "
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• U₁ = 1 = (³⁄₂ x 1 x 0) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
          <TextAtoms
          isi="• U₂ = 4 = (³⁄₂ x 2 x 1) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• U₃ = 10 = (³⁄₂ x 3 x 2) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• U₄ = 19 = (³⁄₂ x 4 x 3) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• U₅ = 31 = (³⁄₂ x 5 x 4) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• U₆ = 46 = (³⁄₂ x 6 x 5) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• Uₙ = (³⁄₂ x n x (n - 1)) + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
         <TextAtoms
          isi="• Uₙ = ³⁄₂ n² - ³⁄₂ n + 1"
          styles={[PolaBilanganStyle.desc, {marginTop: 10}]}
        />
      </ScrollView>
    </ImageBackground>
  );
}

export default PolaBilanganContohSoalTemplate;
