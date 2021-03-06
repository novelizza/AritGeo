import React from 'react';
import {View, ScrollView, ImageBackground, AppState} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
// import Sound from 'react-native-sound';

const {bg} = Img;

const {BarisanGeometriStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function BarisanGeometriTemplates() {
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
      style={BarisanGeometriStyle.bg}>
      <ScrollView
        style={BarisanGeometriStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms
          isi="Barisan Geometri"
          styles={BarisanGeometriStyle.judul}
        />
        <TextAtoms
          isi="# Barisan Geometri #                                          "
          styles={BarisanGeometriStyle.desc2}
        />
        <TextAtoms
          isi="1. Rasio"
          styles={BarisanGeometriStyle.desc}
        />
         <View style={BarisanGeometriStyle.kotakRumus}>
        <View
          style={[
            BarisanGeometriStyle.descSpesial2Container,
            {justifyContent: 'center'},
          ]}>
          <TextAtoms
            isi="r = "
            styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
          />
          <View>
            <TextAtoms
              isi="U?????????"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="---------"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="U???"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
          </View>
        </View>
        </View>
        
        <TextAtoms
          isi="Keterangan :"
          styles={BarisanGeometriStyle.desc}
        />
        <View style={BarisanGeometriStyle.descSpesialContainer}>
          <TextAtoms
            isi="r = rasio"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="U??? = Suku ke - n"
            styles={BarisanGeometriStyle.descSpesial}
          />
        </View>
        <TextAtoms
          isi="2. Rumus Suku ke-n"
          styles={BarisanGeometriStyle.desc}
        />      
        <View style={BarisanGeometriStyle.kotakRumus}>
        <TextAtoms
          isi="U??? = ar????????"
          styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
        />
        </View>
        <TextAtoms
          isi="Keterangan :"
          styles={BarisanGeometriStyle.desc}
        />
        <View style={BarisanGeometriStyle.descSpesial2Wrap}>
            <TextAtoms
              isi="??? U??? = Suku ke-n"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? ??? = 1, 2, 3, ..."
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? a = suku pertama"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? r = rasio"
              styles={BarisanGeometriStyle.descSpesial}
            />
          </View>
          <TextAtoms
          isi="3. Deret Geometri"
          styles={BarisanGeometriStyle.desc}
        />
        <View style={BarisanGeometriStyle.kotakRumus3}>
        <TextAtoms
          isi="Sn ="
          styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
        />
         <View
          style={[
            BarisanGeometriStyle.descSpesial2Container,
            {justifyContent: 'center'},
          ]}>
          <View>
            <TextAtoms
               isi="a(r??? - 1)"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="---------"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
           <TextAtoms
              isi="r - 1"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
          </View>
          </View>
          <TextAtoms
          isi="="
          styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
        />
        <View
          style={[
            BarisanGeometriStyle.descSpesial2Container,
            {justifyContent: 'center'},
          ]}>
          <View>
            <TextAtoms
              isi="a(1 - r???)"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="---------"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="1 - r"
              styles={[BarisanGeometriStyle.descRumus, {alignSelf: 'center'}]}
            />
          </View>
          </View>
        </View>
        <TextAtoms
          isi="Keterangan :"
          styles={BarisanGeometriStyle.desc}
        />
        <View style={BarisanGeometriStyle.descSpesial3Wrap}>
            <TextAtoms
              isi="??? Sn = jumlah suku n pertama"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? U??? = suku ke n"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? a = suku ke-1"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? b = beda"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="??? n = 1,2,3,4,..."
              styles={BarisanGeometriStyle.descSpesial}
            />
          </View>
        {/* <TextAtoms isi="Barisan Geometri" styles={BarisanGeometriStyle.judul} />
        <TextAtoms
          isi="Barisan Geometri (BG) adalah bagian yang memiliki perbandingan (rasio = r) dua suku berurutan tetap."
          styles={BarisanGeometriStyle.desc}
        />
        <View
          style={[
            BarisanGeometriStyle.descSpesial2Container,
            {justifyContent: 'center'},
          ]}>
          <TextAtoms
            isi="r = "
            styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <View>
            <TextAtoms
              isi="U?????????"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="---------"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="U???"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
          </View>
        </View>
        <TextAtoms
          isi="Contoh Barisan Geometri :"
          styles={BarisanGeometriStyle.desc}
        />
        <View style={BarisanGeometriStyle.descSpesialContainer}>
          <TextAtoms
            isi="??? 3, 6, 12, 24, ... ??? U??? = 3 x 2????????"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="??? 	5, ?????????, ?????????, ?????????, ... ??? U??? = 5 x (????????)????????"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="??? ????????, ????????, ????????, ????????, ... ??? U??? = (????????)???"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="??? 5, 25, 125, 625, ... ??? U??? = 5???"
            styles={BarisanGeometriStyle.descSpesial}
          />
        </View>
        <TextAtoms isi="1.	Rumus Suku Ke-n" styles={BarisanGeometriStyle.desc} />
        <View
          style={[
            BarisanGeometriStyle.descSpesial2Container,
            {alignItems: 'center'},
          ]}>
          <TextAtoms
            isi="Un = ar????????"
            styles={[BarisanGeometriStyle.descSpesial, {marginRight: 10}]}
          />
          <View>
            <TextAtoms
              isi="Un = suku ke-n"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="n = 1, 2, 3, ..."
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="a = suku pertama"
              styles={BarisanGeometriStyle.descSpesial}
            />
            <TextAtoms
              isi="r = rasio"
              styles={BarisanGeometriStyle.descSpesial}
            />
          </View>
        </View> */}
        {/* <TextAtoms isi="Contoh :" styles={BarisanGeometriStyle.desc} />
        <TextAtoms
          isi="Carilah suku pertama, rasio, dan suku ke-6 dari barisan : 27, 9, 3, 1, ..."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanGeometriStyle.desc} />
        <View style={BarisanGeometriStyle.descSpesialContainer}>
          <TextAtoms
            isi="27, 9, 3, 1, ..."
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="Suku pertama = a =27"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="Rasio = r = ???????????? = ????????"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="Suku ke-6 = U??? = ar??? = 27 (????????)??? = ????????"
            styles={BarisanGeometriStyle.descSpesial}
          />
        </View> */}
        {/* <TextAtoms isi="2.	Deret Geometri" styles={BarisanGeometriStyle.desc} />
        <TextAtoms
          isi="Deret Geometri (DG), yaitu jumlah n suku pertama dari BG."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms
          isi="BG ??? U???, U???, U???, ..., U???"
          styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
        />
        <TextAtoms
          isi="DG ??? U??? + U??? + U??? + ... + U???"
          styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
        />
        <TextAtoms
          isi="Rumus Deret Geometri :"
          styles={BarisanGeometriStyle.desc}
        />
        <View
          style={[
            BarisanGeometriStyle.descSpesial2Container,
            {justifyContent: 'center'},
          ]}>
          <TextAtoms
            isi="Sn = "
            styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <View>
            <TextAtoms
              isi="a(r???-1)"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="------------"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="r-1"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
          </View>
          <TextAtoms
            isi=" = "
            styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <View>
            <TextAtoms
              isi="a(1-r???)"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="------------"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <TextAtoms
              isi="1-r"
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
          </View>
        </View>
        <TextAtoms isi="" styles={BarisanGeometriStyle.desc} /> */}
        {/* <TextAtoms isi="Contoh 1 :" styles={BarisanGeometriStyle.desc} />
        <TextAtoms
          isi="Hitunglah jumlah 20 suku pertama dari BG : 2, 4, 8, 16, ..."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanGeometriStyle.desc} />
        <View style={BarisanGeometriStyle.descSpesialContainer}>
          <TextAtoms
            isi="a=2 r=4 ?? 2=2 n=20"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <View
            style={[
              BarisanGeometriStyle.descSpesial2Container,
              {justifyContent: 'center'},
            ]}>
            <TextAtoms
              isi="S20 = "
              styles={[BarisanGeometriStyle.descSpesial, {alignSelf: 'center'}]}
            />
            <View>
              <TextAtoms
                isi="2(2????? - 1)"
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
        <TextAtoms isi="Contoh 2 :" styles={BarisanGeometriStyle.desc} />
        <TextAtoms
          isi="Hasil produksi kerajinan seorang pengusaha setiap bulannya meningkat mengikuti aturan barisan geometri. Produksi pada bulan pertama sebanyak 150 unit kerajinan dan pada bulan keempat sebanyak 4.050 kerajinan. Hasil produksi selama 5 bulan adalah ??? unit kerajinan."
          styles={BarisanGeometriStyle.desc}
        />
        <TextAtoms isi="Jawab :" styles={BarisanGeometriStyle.desc} />
        <View style={BarisanGeometriStyle.descSpesialContainer}>
          <TextAtoms
            isi="??? Diketahui : a = 150 dan U???=4050"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="??? Ditanyakan : Hasil Produksi selama 5 bulan (S???)"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="??? Penyelesaian :"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={BarisanGeometriStyle.descSpesial} />
          <TextAtoms
            isi="U??????U??? = ????????????????????????"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="ar???????? = 27"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms isi="r?? = 27" styles={BarisanGeometriStyle.descSpesial} />
          <TextAtoms
            isi="r = ?????27 = 3"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S??? = a(r???-1) / r - 1"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S??? = 150(3???-1) / 3 - 1"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S??? = 150(243-1) / 3 - 1"
            styles={BarisanGeometriStyle.descSpesial}
          />
          <TextAtoms
            isi="S??? = 75 x 242 = 18150"
            styles={BarisanGeometriStyle.descSpesial}
          />
        </View>
        <TextAtoms
          isi="Jadi, hasil produksi selama 5 bulan adalah 18.150 unit kerajinan."
          styles={BarisanGeometriStyle.desc}
        /> */}
      </ScrollView>
    </ImageBackground>
  );
}

export default BarisanGeometriTemplates;
