import React from 'react';
import {View, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import Color from '../../styles/colors';

const {bg} = Img;

const {DeretAritmatikaStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function DeretAritmatikaContohSoalTemplates() {
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={DeretAritmatikaStyle.bg}>
      <ScrollView
        style={DeretAritmatikaStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms isi="Contoh 1 :" styles={DeretAritmatikaStyle.judul} />
        <TextAtoms
          isi="Hitunglah jumlah 50 suku pertama dari BA 5, 9, 13, 17, ..."
          styles={DeretAritmatikaStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={DeretAritmatikaStyle.desc} />
        <View style={DeretAritmatikaStyle.descSpesialContainer}>
          <TextAtoms
            isi="a=5, b=9-5=4, n=50"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Uₙ = a + (n-1) b"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="U₅₀ = 5 + (50-1) 4 = 201"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="S₅₀ = ½ x 50 x (5+210) = 25 x 206"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="=5150"
            styles={[DeretAritmatikaStyle.descSpesial, {marginLeft: 180}]}
          />
        </View>
        <TextAtoms isi="Cara Lain Contoh 1:" styles={DeretAritmatikaStyle.desc} />
        <View style={DeretAritmatikaStyle.descSpesialContainer}>
          <TextAtoms
            isi="S₅₀ = ½ x 50 ( 2 x 5 + (50-1) 4)"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="=25 ( 10 + 49 x 4)"
            styles={[DeretAritmatikaStyle.descSpesial, {marginLeft: 30}]}
          />
          <TextAtoms
            isi="= 5150"
            styles={[DeretAritmatikaStyle.descSpesial, {marginLeft: 30}]}
          />
        </View>
        <TextAtoms isi="Contoh 2 :" styles={DeretAritmatikaStyle.judul} />
        <TextAtoms
          isi="Seorang pegawai kecil menerima gaji tahun pertama sebesar Rp3.000.000,00. Setiap tahun gaji tersebut naik Rp500.000,00. Jumlah uang yang diterima pegawai tersebut selama sepuluh tahun adalah ...."
          styles={DeretAritmatikaStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={DeretAritmatikaStyle.desc} />
        <View style={DeretAritmatikaStyle.soalContainer}>
          <View style={DeretAritmatikaStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Diketahui:"
              styles={DeretAritmatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Gaji awal (a) = 3.000.000"
              styles={DeretAritmatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Kenaikan gaji (b) = 500.000"
              styles={DeretAritmatikaStyle.descSpesial2}
            />
          </View>
          <View style={DeretAritmatikaStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Ditanyakan:"
              styles={DeretAritmatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Jumlah gaji selama 10 tahun (S₁₀)"
              styles={DeretAritmatikaStyle.descSpesial2}
            />
          </View>
        </View>
        <View
          style={[
            DeretAritmatikaStyle.descSpesialContainer,
            {padding: 5, borderWidth: StyleSheet.hairlineWidth, borderColor: Color.GREEN2_COLOR},
          ]}>
          <TextAtoms
            isi="• Penyelesaian Contoh 2:"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="Sₙ = ⁿ⁄₂ (2a + (n – 1)b)"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="S₁₀= ¹⁰⁄₂ ( 2 (3.000.000) + ( (10-1) x (500.000))"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="S₁₀ = 5 (6.000.000 + 4.500.000) S₁₀ = 5 (10.500.000)"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="S₁₀ = 52.500.000"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms isi="" styles={DeretAritmatikaStyle.descSpesial2} />
          <TextAtoms
            isi="Jadi, Jumlah uang yang diterima pegawai tersebut selama sepuluh tahun adalah Rp52.500.000,00."
            styles={DeretAritmatikaStyle.descSpesial2}
          />
        </View>
        <TextAtoms isi="Contoh 3 :" styles={DeretAritmatikaStyle.judul} />
        <TextAtoms
          isi="Seorang pemetik kebun memetik jeruknya setiap hari, dan mencatat banyaknya jeruk yang dipetik.  Ternyata banyaknya jeruk yang dipetik pada hari ke-n memenuhi rumus Uₙ = 50 + 25n. Jumlah jeruk yang telah dipetik selama 10 hari yang pertama adalah ...."
          styles={DeretAritmatikaStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={DeretAritmatikaStyle.desc} />
        <View
          style={[
            DeretAritmatikaStyle.descSpesialContainer,
            {marginBottom: 15},
          ]}>
          <TextAtoms
            isi="Diketahui Uₙ = 50 + 25n, maka:"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="U₁ = 50 + 25(1) = 75"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="U₁₀ = 50 + 25(10) = 300"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Sₙ = n/2 (a + Un)"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="S₁₀ = 10/2 (75 + 300)"
            styles={DeretAritmatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="= 5(375)"
            styles={[DeretAritmatikaStyle.descSpesial, {marginLeft: 30}]}
          />
          <TextAtoms
            isi="= 1.875"
            styles={[DeretAritmatikaStyle.descSpesial, {marginLeft: 30}]}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default DeretAritmatikaContohSoalTemplates;
