import React from 'react';
import {View, ScrollView, ImageBackground,  StyleSheet,} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import Color from '../../styles/colors';

const {bg} = Img;

const {BarisanGeometriStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function BarisanGeometriContohSoalTemplates() {
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={BarisanGeometriStyle.bg}>
      <ScrollView
        style={BarisanGeometriStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms isi="Contoh 1 :" styles={BarisanGeometriStyle.judul} />
        <TextAtoms
          isi="Carilah suku pertama, rasio, dan suku ke-6 dari barisan : 27, 9, 3, 1, ..."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanGeometriStyle.desc} />
        <View
          style={[
            BarisanGeometriStyle.descSpesialContainer,
            {marginBottom: 10},
          ]}>
          <TextAtoms
            isi="27, 9, 3, 1, ..."
            styles={BarisanGeometriStyle.descSpesial}
          />
           <View style={BarisanGeometriStyle.soalContainer}>
          <View style={BarisanGeometriStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Diketahui:"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            <TextAtoms
              isi="Suku Pertama = a = 27"
              styles={BarisanGeometriStyle.descSpesial2}
            />
             <TextAtoms
               isi="Rasio = r = ⁹⁄₂₇ = ¹⁄₃"
              styles={BarisanGeometriStyle.descSpesial2}
            />
          </View>
          <View style={BarisanGeometriStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Ditanyakan:"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            <TextAtoms
              isi="U₆ ?"
              styles={BarisanGeometriStyle.descSpesial2}
            />
          </View>
        </View>
        <View
          style={[
            BarisanGeometriStyle.descSpesialContainer,
            {padding: 5, borderWidth: StyleSheet.hairlineWidth, marginBottom: 20, borderColor: Color.GREEN2_COLOR},
          ]}>
          <TextAtoms
            isi="• Penyelesaian:"
            styles={BarisanGeometriStyle.descSpesial2}
          />
           <TextAtoms
            isi="Suku ke-6 = U₆ = ar⁵ = 27 (¹⁄₃)⁵ = ¹⁄₉"
            styles={BarisanGeometriStyle.descSpesial}
          />
        </View>
        </View>
        <TextAtoms isi="Contoh 2 :" styles={BarisanGeometriStyle.judul} />
        <TextAtoms
          isi="Hitunglah jumlah 20 suku pertama dari BG : 2, 4, 8, 16, ..."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanGeometriStyle.desc} />
        <View style={BarisanGeometriStyle.soalContainer}>
          <View style={BarisanGeometriStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Diketahui:"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            <TextAtoms
              isi="a=2 r=4 ÷ 2=2 n=20"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            
          </View>
          <View style={BarisanGeometriStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Ditanyakan:"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            <TextAtoms
              isi="S₂₀ ?"
              styles={BarisanGeometriStyle.descSpesial2}
            />
          </View>
        </View>
        <View
          style={[
            BarisanGeometriStyle.descSpesialContainer,
            {padding: 5, borderWidth: StyleSheet.hairlineWidth, marginBottom: 20, borderColor: Color.GREEN2_COLOR},
          ]}>
          <TextAtoms
            isi="• Penyelesaian:"
            styles={BarisanGeometriStyle.descSpesial2}
          />
           <View
            style={[
              BarisanGeometriStyle.descSpesial2Container,
              {marginTop: 5},
            ]}>
            <TextAtoms
              isi="S₂₀ = "
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <View>
              <TextAtoms
                isi="2(2²⁰ - 1)"
                styles={[
                  BarisanGeometriStyle.descSpesial,
                  {alignSelf: 'center'},
                ]}
              />
              <TextAtoms
                isi="------------"
                styles={[
                  BarisanGeometriStyle.descSpesial,
                  {alignSelf: 'center'},
                ]}
              />
              <TextAtoms
                isi="2-1"
                styles={[
                  BarisanGeometriStyle.descSpesial,
                  {alignSelf: 'center'},
                ]}
              />
            </View>
            <TextAtoms
              isi=" = "
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <View>
              <TextAtoms
                isi="2(1048576 - 1)"
                styles={[
                  BarisanGeometriStyle.descSpesial,
                  {alignSelf: 'center'},
                ]}
              />
              <TextAtoms
                isi="------------"
                styles={[
                  BarisanGeometriStyle.descSpesial,
                  {alignSelf: 'center'},
                ]}
              />
              <TextAtoms
                isi="1"
                styles={[
                  BarisanGeometriStyle.descSpesial,
                  {alignSelf: 'center'},
                ]}
              />
            </View>
          </View>
          <TextAtoms
            isi="= 2 x 1048575"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="= 2097150"
            styles={BarisanGeometriStyle.descSpesial}
          />
        </View>
        <TextAtoms isi="Contoh 3 :" styles={BarisanGeometriStyle.judul} />
        <TextAtoms
          isi="Hasil produksi kerajinan seorang pengusaha setiap bulannya meningkat mengikuti aturan barisan geometri. Produksi pada bulan pertama sebanyak 150 unit kerajinan dan pada bulan keempat sebanyak 4.050 kerajinan. Hasil produksi selama 5 bulan adalah ⋯ unit kerajinan."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanGeometriStyle.desc} />
        <View style={BarisanGeometriStyle.soalContainer}>
          <View style={BarisanGeometriStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Diketahui:"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            <TextAtoms
              isi="a = 150 dan U₄=4050"
              styles={BarisanGeometriStyle.descSpesial2}
            />
          </View>
          <View style={BarisanGeometriStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Ditanyakan:"
              styles={BarisanGeometriStyle.descSpesial2}
            />
            <TextAtoms
              isi="Hasil Produksi Selama 5 Bulan (S₅) ?"
              styles={BarisanGeometriStyle.descSpesial2}
            />
          </View>
        </View>
        <View
          style={[
            BarisanGeometriStyle.descSpesialContainer,
            {padding: 10, borderWidth: StyleSheet.hairlineWidth, marginBottom: 20, borderColor: Color.GREEN2_COLOR},
          ]}>
          <TextAtoms
            isi="• Penyelesaian:"
            styles={BarisanGeometriStyle.descSpesial2}
          />
           <TextAtoms
            isi="U₄⁄U₁ = ⁴⁰⁵⁰⁄₁₅₀"
            styles={[BarisanGeometriStyle.descSpesial, {marginTop: 5}]}
          />
          <TextAtoms
            isi="ar³⁄ₐ = 27"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms isi="r³ = 27" styles={BarisanGeometriStyle.descSpesial} />
          <TextAtoms
            isi="r = ³√27 = 3"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="Sₙ = a(rⁿ-1) / r - 1"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S₅ = 150(3⁵-1) / 3 - 1"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S₅ = 150(243-1) / 3 - 1"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S₅ = 75 x 242 = 18150"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
          isi="Jadi, hasil produksi selama 5 bulan adalah 18.150 unit kerajinan."
          styles={BarisanGeometriStyle.desc}
        />
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
}

export default BarisanGeometriContohSoalTemplates;
