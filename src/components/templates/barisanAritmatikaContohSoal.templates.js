import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import Color from '../../styles/colors';

const {bg, kurawal} = Img;

const {BarisanArimatikaStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function BarisanAritmatikaContohSoalTemplates() {
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={BarisanArimatikaStyle.bg}>
      <ScrollView
        style={BarisanArimatikaStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms isi="Contoh 1 :" styles={BarisanArimatikaStyle.judul} />
        <TextAtoms
          isi="Carilah suku pertama, beda, dan suku ke-8 pada barisan bilangan : 4, 1, -2, -5, …"
          styles={[BarisanArimatikaStyle.descSpesial, {marginHorizontal: 10}]}
        />
        <TextAtoms isi="Jawab :" styles={BarisanArimatikaStyle.desc} />
       
        <View style={BarisanArimatikaStyle.descSpesialContainer}>
          <TextAtoms
            isi="4, 1, -2, -5, …"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Suku Pertama = U₁ = a = 4"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Beda = b = 1 - 4 = -3"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Suku ke-8 = U₈ = a + (n-1) b"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="= 4 + (8-1) x (-3)"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 120}]}
          />
          <TextAtoms
            isi="= -17"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 120}]}
          />
        </View>
        <TextAtoms isi="Contoh 2 :" styles={BarisanArimatikaStyle.judul} />
        <TextAtoms
          isi="Suku ke-5 dan ke-9 suatu BA berturut-turut adalah 7 dan 19. Tentukan suku ke-13 pada barisan tersebut!"
          styles={[BarisanArimatikaStyle.descSpesial, {marginHorizontal: 10}]}
        />
        <TextAtoms isi="Jawab :" styles={BarisanArimatikaStyle.desc} />
        <View style={BarisanArimatikaStyle.soalContainer}>
          <View style={BarisanArimatikaStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Diketahui:"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="U₅ = 7 dan U₉ = 19"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
          </View>
          <View style={BarisanArimatikaStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Ditanyakan:"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Suku Ke - 13"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
          </View>
        </View>
        <View style={BarisanArimatikaStyle.descSpesialContainer}>
          <TextAtoms
            isi="U₅ = 7 → a + 4b = 7"
            styles={[BarisanArimatikaStyle.descSpesial, {marginTop: 10}]}
          />
          <TextAtoms
            isi="U₉ = 19 → a + 8b = 19"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <View style={BarisanArimatikaStyle.line} />
          <TextAtoms
            isi="-4b = -12"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 90}]}
          />
          <TextAtoms
            isi="b = 3"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 110}]}
          />
          <TextAtoms
            isi="a + 4b = 7 → a + 4 x 3 = 7"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="a = 7 - 12 = 5"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="U₁₃ = a + 12b = -5 + 12 x 3"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="= -5 + 36 = 31"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 110}]}
          />
        </View>
        <TextAtoms isi="Contoh 3 :" styles={BarisanArimatikaStyle.judul} />
        <TextAtoms
          isi="Dalam gedung pertunjukkan disusun kursi dengan baris paling depan terdiri 14 buah, baris kedua berisi 16 buah, baris ketiga 18 buah dan seterusnya selalu bertambah 2. Banyaknya kursi pada baris ke-20 adalah ..."
          styles={[BarisanArimatikaStyle.descSpesial, {marginHorizontal: 10}]}
        />
        <TextAtoms isi="Jawab :" styles={BarisanArimatikaStyle.desc} />
        <View style={BarisanArimatikaStyle.soalContainer}>
          <View style={BarisanArimatikaStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Diketahui:"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Banyak kursi baris pertama (U₁) = 14"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Banyak kursi baris kedua (U₂) =  16"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
          </View>
          <View style={BarisanArimatikaStyle.descSpesial3Container}>
            <TextAtoms
              isi="• Ditanyakan:"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
            <TextAtoms
              isi="Banyak kursi pada baris ke 20 (U₂₀)"
              styles={BarisanArimatikaStyle.descSpesial2}
            />
          </View>
        </View>
        <View
          style={[
            BarisanArimatikaStyle.descSpesialContainer,
            {padding: 5, borderWidth: StyleSheet.hairlineWidth, marginBottom: 20, borderColor: Color.GREEN2_COLOR},
          ]}>
          <TextAtoms
            isi="• Penyelesaian Jawab Contoh 3:"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="Beda (b) = U₂ - U₁"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="= 16 - 14"
            styles={[BarisanArimatikaStyle.descSpesial2, {marginLeft: 60}]}
          />
          <TextAtoms
            isi="= 2"
            styles={[BarisanArimatikaStyle.descSpesial2, {marginLeft: 60}]}
          />
          <TextAtoms
            isi="Uₙ = a + (n - 1)b"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="U₂₀ = 14 + (20 - 1).2"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="U₂₀ = 14 + (19).2"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="U₂₀ = 14 + 38"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="U₂₀ = 52"
            styles={BarisanArimatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="Jadi, banyaknya kursi pada baris ke-20 adalah 52 buah."
            styles={BarisanArimatikaStyle.descSpesial2}
          />
        </View>
        {/* <TextAtoms isi="Contoh 4" styles={BarisanArimatikaStyle.judul} />
        <TextAtoms
          isi="Tentukan Rumus suku ke-n dari barisan 1, 3, 6, 10, 15, …"
          styles={BarisanArimatikaStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanArimatikaStyle.desc} />
        <View
          style={[
            BarisanArimatikaStyle.descSpesialContainer,
            {marginBottom: 15},
          ]}> */}
          {/* <TextAtoms
            isi="a + b + c : 1, 3, 6, 10, 15, ..."
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="v  v   v    v"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 90}]}
          />
          <TextAtoms
            isi="3a + b :       2  3   4    5 → Beda"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="v   v    v"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 100}]}
          />
          <TextAtoms
            isi="2a ∶                1   1   1 → Beda Tetap"
            styles={BarisanArimatikaStyle.descSpesial}
          /> */}
          {/* <Image source={kurawal} style={{height: 110, width: 320}} />
          <TextAtoms
            isi="2a = 1 → a = ½"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="3a + b = 3 → 3 x ½ + b = 2 → ³⁄₂ + b = 2"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="→ b = 2 ³⁄₂ → b = ½"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 85}]}
          />
          <TextAtoms
            isi="a + b + c = 1 → ½ + ½ + c = 1 → c = 0"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Un = an² + bn + c = ½ n² + ½ n + 0"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="Un = ½ n (n+1)"
            styles={BarisanArimatikaStyle.descSpesial}
          />
        </View> */}
      </ScrollView>
    </ImageBackground>
  );
}

export default BarisanAritmatikaContohSoalTemplates;
