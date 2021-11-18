import React from 'react';
import {View, ScrollView, ImageBackground, AppState} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
// import Sound from 'react-native-sound';
import Img from '../../assets';
const {bg} = Img;

const {BarisanArimatikaStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function BarisanAritmatikaTemplates() {
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
      style={BarisanArimatikaStyle.bg}>
      <ScrollView
        style={BarisanArimatikaStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms
          isi="Barisan Aritmatika"
          styles={BarisanArimatikaStyle.judul}
        />
        <TextAtoms
          isi="Barisan Aritmatika (BA) adalah barisan yang memiliki selisih (beda = b) du suku berurutan yang tetap."
          styles={BarisanArimatikaStyle.desc}
        />
        <TextAtoms
          isi="b=Uₙ - Uₙ₋₁"
          styles={[BarisanArimatikaStyle.descSpesial, {alignSelf: 'center'}]}
        />
        <TextAtoms
          isi="Contoh Barisan Aritmatika :"
          styles={BarisanArimatikaStyle.desc}
        />
        <View style={BarisanArimatikaStyle.descSpesialContainer}>
          <TextAtoms
            isi="• 3, 5, 7, 9, 11, ... → Uₙ = 2n + 1"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="• -2, 1, 4, 7, 10, ... → Uₙ = 3n - 5"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="• 6, 2, -2, -6, -10, ... → Uₙ = 10 - 4n"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="• 1, 3, 6, 10, 15, ... → Uₙ = ½ n(n+1)"
            styles={BarisanArimatikaStyle.descSpesial}
          />
          <TextAtoms
            isi="• 0, -3, -6, -9, 12, ... → Uₙ = 3 - 3n"
            styles={BarisanArimatikaStyle.descSpesial}
          />
        </View>
        <TextAtoms
          isi="1. Rumus Suku ke-n"
          styles={BarisanArimatikaStyle.desc}
        />
        <View style={BarisanArimatikaStyle.descSpesial2Container}>
          <View style={BarisanArimatikaStyle.descSpesial2Wrap}>
            <TextAtoms
              isi="Uₙ = a + (n-1) b"
              styles={BarisanArimatikaStyle.descSpesial}
            />
          </View>
          <View style={BarisanArimatikaStyle.descSpesial2Wrap}>
            <TextAtoms
              isi="Uₙ = Suku ke-n"
              styles={BarisanArimatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="ₙ = 1, 2, 3, ..."
              styles={BarisanArimatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="a = Suku Pertama"
              styles={BarisanArimatikaStyle.descSpesial}
            />
            <TextAtoms
              isi="b = beda"
              styles={BarisanArimatikaStyle.descSpesial}
            />
          </View>
        </View>
        {/* <TextAtoms isi="Contoh 1 :" styles={BarisanArimatikaStyle.desc} />
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
            isi="= -17a"
            styles={[BarisanArimatikaStyle.descSpesial, {marginLeft: 120}]}
          />
        </View>
        <TextAtoms isi="Contoh 2 :" styles={BarisanArimatikaStyle.desc} />
        <TextAtoms
          isi="Suku ke-5 dan ke-9 suatu BA berturut-turut adalah 7 dan 19. Tentukan suku ke-13 pada barisan tersebut!"
          styles={[BarisanArimatikaStyle.descSpesial, {marginHorizontal: 10}]}
        />
        <TextAtoms isi="Jawab :" styles={BarisanArimatikaStyle.desc} />
        <View style={BarisanArimatikaStyle.descSpesialContainer}>
          <TextAtoms
            isi="U₅ = 7 → a + 4b = 7"
            styles={BarisanArimatikaStyle.descSpesial}
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
        <TextAtoms isi="Contoh 3 :" styles={BarisanArimatikaStyle.desc} />
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
            {padding: 5, borderWidth: StyleSheet.hairlineWidth},
          ]}>
          <TextAtoms
            isi="• Penyelesaian:"
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
        </View> */}
        <TextAtoms
          isi="2. Barisan Aritmatika Bertingkat"
          styles={BarisanArimatikaStyle.desc}
        />
        <TextAtoms
          isi="Merupakan Barisan Aritmatika yang masih selisih dua suku berurutannya berubah secata tetap. Rumus suku ke-n"
          styles={BarisanArimatikaStyle.desc}
        />
        <TextAtoms
          isi="Uₙ = an² + bn + c"
          styles={[BarisanArimatikaStyle.descSpesial, {alignSelf: 'center'}]}
        />
        {/* <TextAtoms isi="Contoh :" styles={BarisanArimatikaStyle.desc} />
        <TextAtoms isi="Jawab :" styles={BarisanArimatikaStyle.desc} />
        <View
          style={[
            BarisanArimatikaStyle.descSpesialContainer,
            {marginBottom: 15},
          ]}>
          <Image source={kurawal} style={{height: 110, width: 330}} />
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

export default BarisanAritmatikaTemplates;
