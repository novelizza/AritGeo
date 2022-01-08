import React from 'react';
import {ScrollView, AppState, ImageBackground, View} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
const {bg} = Img;
// import Sound from 'react-native-sound';

const {DeretAritmatikaStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function DeretAritmatikaTemplates() {
  // const appState = React.useRef(AppState.currentState);
  // const [appStateVisible, setAppStateVisible] = React.useState(
  //   appState.current,
  // );
  // let sound;

  // React.useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === 'active'
  //     ) {
  //       console.log('App has come to the foreground!');
  //     }

  //     appState.current = nextAppState;
  //     setAppStateVisible(appState.current);
  //     console.log('AppState', appState.current);
  //   });

  //   return () => {
  //     sound.stop(() => {
  //       console.log('Stop');
  //     });
  //     subscription.remove();
  //   };
  // }, []);

  // React.useEffect(() => {
  //   if (appStateVisible === 'active') {
  //     sound = new Sound(
  //       require('../../assets/music/happy.mp3'),
  //       (error, _sound) => {
  //         if (error) {
  //           alert('error' + error.message);
  //           return;
  //         }
  //         sound.play(() => {
  //           sound.release();
  //         });
  //       },
  //     );
  //   }
  // }, [appStateVisible]);
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={DeretAritmatikaStyle.bg}>
      <ScrollView
        style={DeretAritmatikaStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms isi="Deret Aritmatika" styles={DeretAritmatikaStyle.judul} />
        <TextAtoms
          isi="# Deret Aritmatika #                                      "
          styles={DeretAritmatikaStyle.desc}
        />
        <View style={DeretAritmatikaStyle.kotakRumus3}>
        <TextAtoms
          isi="Sn = ½ n (U₁ + Uₙ) = ½ n (2a + (n-1) b)"
          styles={[DeretAritmatikaStyle.descRumus, {alignSelf: 'center'}]}
        />
        </View>
        
        <TextAtoms
          isi="Keterangan :"
          styles={DeretAritmatikaStyle.desc}
        />
        <View style={[DeretAritmatikaStyle.descSpesial3Wrap, {marginBottom: 25, marginLeft: 10}]}>
            <TextAtoms
              isi="• Sn = jumlah suku n pertama"
              styles={DeretAritmatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="• Uₙ = suku ke n"
              styles={DeretAritmatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="• a = suku ke-1"
              styles={DeretAritmatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="• b = beda"
              styles={DeretAritmatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="• n = 1,2,3,4,..."
              styles={DeretAritmatikaStyle.descSpesial}
            />
          </View>
        {/* <TextAtoms isi="Contoh 1 :" styles={DeretAritmatikaStyle.desc} />
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
        <TextAtoms isi="Cara Lain :" styles={DeretAritmatikaStyle.desc} />
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
        <TextAtoms isi="Contoh 2 :" styles={DeretAritmatikaStyle.desc} />
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
            {padding: 5, borderWidth: StyleSheet.hairlineWidth},
          ]}>
          <TextAtoms
            isi="• Penyelesaian:"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="Sₙ =ⁿ⁄₂ (2a + (n – 1)b)"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="S¹⁰= ¹⁰⁄₂ ( 2 (3.000.000) + ( (10-1) x (500.000))"
            styles={DeretAritmatikaStyle.descSpesial2}
          />
          <TextAtoms
            isi="S¹⁰ = 5 (6.000.000 + 4.500.000) S¹⁰ = 5 (10.500.000)"
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
        <TextAtoms isi="Contoh 3 :" styles={DeretAritmatikaStyle.desc} />
        <TextAtoms
          isi="Seorang pemetik kebun memetik jeruknya setiap hari, dan mencatat banyaknya jeruk yang dipetik.  Ternyata banyaknya jeruk yang dipetik pada hari ke-n memenuhi rumus Un = 50 + 25n. Jumlah jeruk yang telah dipetik selama 10 hari yang pertama adalah ...."
          styles={DeretAritmatikaStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={DeretAritmatikaStyle.desc} />
        <View
          style={[
            DeretAritmatikaStyle.descSpesialContainer,
            {marginBottom: 15},
          ]}>
          <TextAtoms
            isi="Diketahui Un = 50 + 25n, maka:"
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
        </View> */}
      </ScrollView>
    </ImageBackground>
  );
}

export default DeretAritmatikaTemplates;
