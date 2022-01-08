import React from 'react';
import {View, ScrollView, ImageBackground, Image} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
// import Sound from 'react-native-sound';

const {PolaBilanganStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;
const {bg, panah, segitigadua, segitigatiga} = Img;

function PolaBilanganMateriTemplate() {
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
      style={PolaBilanganStyle.bg}>
      <ScrollView
        style={PolaBilanganStyle.container}
        showsVerticalScrollIndicator={false}>
        <TextAtoms
          isi="Pola Bilangan"
          styles={[PolaBilanganStyle.judul, {marginTop: 10}]}
        />
        <TextAtoms
          isi="Tujuan Pembelajaran dari Pola bilangan adalah Peserta didik mampu menghitung suku selanjutnya dari suatu pola barisan bilangan dengan tepat dan perserta didik mampu menentukan suku selanjutnya dari suatu barisan bilangan dengan cara menggenerelisasikan pola bilangan sebelumnya dengan benar."
          styles={PolaBilanganStyle.desc}
        />
        <TextAtoms
          isi="Pola bilangan adalah aturan yang menentukan suatu barisan bilangan. Aturan dinamakan rumus suku ke-n dilambangkan dengan Uₙ."
          styles={PolaBilanganStyle.desc}
        />
        <TextAtoms
          isi="Contoh Pola dan Barisan Bilangan :"
          styles={PolaBilanganStyle.desc}
        />
        <TextAtoms
          isi="1. Barisan Bilangan Asli → Uₙ = n :"
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="1," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="2," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="3," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="4,..." styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Berdasarkan Gambar diatas Pola ke-7 adalah..."
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer2}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />

            </View>
            <TextAtoms isi="7" styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Karena rumusnya adalah Uₙ = n"
          styles={PolaBilanganStyle.desc}
        />
        <TextAtoms
          isi="2. Barisan Bilangan Genap"
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="2," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="4," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="6,..." styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Berdasarkan Gambar diatas Pola ke-4 adalah..."
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer2}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="8" styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Karena rumusnya adalah Uₙ = 2n"
          styles={PolaBilanganStyle.desc}
        />
        <TextAtoms
          isi="3. Barisan Bilangan Ganjil"
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="1," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="3," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="5,..." styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Berdasarkan Gambar diatas Pola ke-4 adalah..."
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer2}>
        <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="7" styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Karena rumusnya adalah Uₙ = 2n-1"
          styles={PolaBilanganStyle.desc}
        />

        <TextAtoms
          isi="4. Barisan Bilangan Persegi"
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer3}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="1," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="4," styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Berdasarkan Gambar diatas Pola ke-3 adalah..."
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer2}>
        <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="9" styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Karena rumusnya adalah Uₙ = n²"
          styles={PolaBilanganStyle.desc}
        />

        <TextAtoms
          isi="5. Barisan Bilangan Persegi Panjang "
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer3}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="2," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="6," styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Berdasarkan Gambar diatas Pola ke-3 adalah..."
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer2}>
        <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="12" styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Karena rumusnya adalah Uₙ = n(n + 1)"
          styles={PolaBilanganStyle.desc}
        />

        <TextAtoms
          isi="6. Barisan Bilangan Segitiga"
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer}>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="1," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              {/* <View style={PolaBilanganStyle.node} /> */}
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="3," styles={PolaBilanganStyle.desc} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
              <View style={PolaBilanganStyle.nodeNotActive} />
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              {/* <View style={PolaBilanganStyle.node} /> */}
              {/* <View style={PolaBilanganStyle.node} /> */}
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              {/* <View style={PolaBilanganStyle.node} /> */}
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="6" styles={PolaBilanganStyle.desc} />
          </View>
          
        </View>
        <TextAtoms
          isi="Berdasarkan Gambar diatas Pola ke-4 adalah..."
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.nodeContainer2}>
        <View style={PolaBilanganStyle.nodeWrapContainer}>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              {/* <View style={PolaBilanganStyle.node} /> */}
              {/* <View style={PolaBilanganStyle.node} /> */}
              {/* <View style={PolaBilanganStyle.node} /> */}
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              {/* <View style={PolaBilanganStyle.node} /> */}
              {/* <View style={PolaBilanganStyle.node} /> */}
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              {/* <View style={PolaBilanganStyle.node} /> */}
            </View>
            <View style={PolaBilanganStyle.nodeWrap}>
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
              <View style={PolaBilanganStyle.node} />
            </View>
            <TextAtoms isi="10" styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="Karena rumusnya adalah Uₙ = ½ n(n + 1)"
          styles={PolaBilanganStyle.desc}
        />
        <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="7. Barisan Bilangan Segitiga Pascal"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Segitiga Pascal adalah susunan segitiga yang dibuat dengan menjumlahkan elemen yang berdekatan dalam baris sebelumnya. Susunan segitiga ini dibuat dengan menjumlahkan elemen yang berdekatan dalam baris sebelumnya."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
           <TextAtoms
            isi="Misalkan variabel a dan b dijumlahkan, kemudian dipangkatkan dari 0 hingga pangkat 3, akan menghasilkan penjabaran seperti berikut."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
        </View>
        <Image source={segitigadua} style={PolaBilanganStyle.image}/>
        {/* <View style={PolaBilanganStyle.nodeContainerSpesial}>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="2" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="3" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="3" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="4" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="6" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="4" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="5" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="10" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="10" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="5" styles={PolaBilanganStyle.descSpesialIsi} />
            <TextAtoms isi="1" styles={PolaBilanganStyle.descSpesialIsi} />
          </View>
          <View style={PolaBilanganStyle.nodeWrapSpesialContainer}>
            <TextAtoms
              isi=". . . ."
              styles={PolaBilanganStyle.descSpesialIsi}
            />
          </View>
        </View> */}
        <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="Perhatikan susunan angka yang dicetak tebal dari atas kebawah, hingga menemukan suatu bentuk segitiga. Pola bilangan tersebutlah yang selanjutnya dinamakan dengan segitiga pascal."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Segitiga Pascal adalah aturan geometri pada koefisien binomial dalam sebuah segitiga."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
          <TextAtoms
            isi="Pola Bilangan Pada Segitiga Pascal yaitu Susunan segitiga Pascal dibuat dengan menjumlahkan elemen yang berdekatan dalam baris sebelumnya. Dan Barisan segitiga Pascal umumnya dihitung dimulai dengan baris kosong, dan nomor-nomor dalam barisan ganjil diatur agar terkait dengan nomor-nomor dalam baris genap."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
           <TextAtoms
            isi="Konsep segitiga Pascal adalah melakukan perhitungan tanpa memperhatikan variabel a dan b. Dalam artian, cukup memperhatikan koefisien binomialnya, sebagai berikut."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
          <TextAtoms
            isi="• Di barisan nol, hanya tulis angka 1."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 20}]}
          />
          <TextAtoms
            isi="• Di setiap barisan di bawahnya, setiap kiri dan kanan tulis angka 1."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="• Hasil penjumlahan dua angka di atasnya, kemudian ditulis pada baris di bawahnya."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="• Angka 1 di kiri dan kanan menurut (2), selalu mengapit hasil (3)."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="• Perhitungan dapat diteruskan dengan pola yang sama."
            styles={PolaBilanganStyle.descSpesial}
          />
        </View>
        <Image source={segitigatiga} style={PolaBilanganStyle.image2}/>
        <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="Perhatikan pola dalam mengerjakan soal pangkat 2 berikut dan perhatikan koefisien untuk pangkat 2 dalam skema segitiga Pascal di atas."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="(a+b)² = a² + 2ab + b²"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Contoh lainnya, perhatikan pola dalam mengerjakan soal pangkat 3 berikut dan perhatikan koefisien untuk pangkat 3 dalam skema segitiga Pascal di atas."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
           <TextAtoms
            isi="(a+b)³ = 1a³bº + 3a²b¹ + 3a¹b² + 1aºb³"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="(perhatikan pola pangkatnya)"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="= a³ + 3a²b + 3ab² + b³"
            styles={PolaBilanganStyle.descSpesial}
          />
        </View>
        <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="• Contoh Soal Bilangan Segitiga Pascal"
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 20}]}
          />
          <TextAtoms
            isi="Tentukan pola atau aturan dari barisan di bawah ini !"
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
           <TextAtoms
            isi="1, 3, 5, 7, …"
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
          <TextAtoms
            isi="Jawab : Aturan atau pola dari barisan bilangan : 1, 3, 5, 7, … secara definisi adalah bilangan ganjil mulai 1 atau bilangan naik yang memiliki selisih 2 yang dimulai dari 1. Sedangkan secara rumus polanya adalah Uₙ = 2n – 1 dengan n dimulai dari 1."
            styles={[PolaBilanganStyle.descSpesial, {marginTop: 10}]}
          />
        </View>
        {/* <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="Penggunaan Segitiga Pascal :"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="1. Menentukan Koefisien pada suku-suku kecil hasil pemangkatan suku dua."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <View style={PolaBilanganStyle.descSpesialContainer2}>
            <TextAtoms
              isi="Contoh :"
              styles={PolaBilanganStyle.descSpesialLain}
            />
            <View style={PolaBilanganStyle.descSpesialContainer3}>
              <TextAtoms
                isi="(x+y)ⁿ = axⁿ + bxⁿ⁻¹y + cxⁿ⁻²y² + ... yⁿ"
                styles={PolaBilanganStyle.descSpesialLain}
              />
              <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
              <TextAtoms
                isi="(x+y)³ = 1x³ + 2x³⁻¹y + 3x³⁻²y² + 1y³x³ + 3x²y + 3xy² + y³"
                styles={PolaBilanganStyle.descSpesialLain}
              />
            </View>
          </View>
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="2.	Menentukan peluang dari suatu kejadian"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi="Contoh :" styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="Tentukan peluang munculnya Angka dan satu Gambar pada pelemparan 3 koin!"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi="Jawab :" styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="Karena koin dilempar 3 kali, kejadian muncul mengikuti pola (A+G)³ sehingga diperoleh hasil pemangkatan :"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="Susunan Kejadian : A³ A²G AG² G³"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Koefisien Suku : 1 3 3 1"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Hasilnya : A³ + 3A²G + 3AG² G³"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="A²G = 2 kali muncul Angka dan 1 kali muncul Gambar. n(2A,1G) = 3 → n(S) = 2³ = 8"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Maka P(2A,1G)=⅜"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="3. Menentukan banyaknya anggota pada himpunan bagian."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi="Contoh :" styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="M = { x | - 3 < x ≤ 2,x ε Bilangan Bulat}"
            styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <TextAtoms
            isi="Tentukan banyaknya himpunan bagian M yang mempunyai 3 anggota!"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms isi="Jawab :" styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="M = { -2, -1, 0, 1, 2 } → n(M) = 5"
            styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <TextAtoms
            isi="Pola ∆ Pascal : 1 5 10 10 5 1"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Banyaknya : 0 1 2 3 4 5"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="↑"
            styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <TextAtoms
            isi="n Anggota"
            styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
          /> 
          <Image source={panah} style={{height: 95, width: 250}} />
          <TextAtoms
            isi="Banyaknya Himpunan bagian M yang memiliki 3 anggota adalah 10 Himpunan."
            styles={PolaBilanganStyle.descSpesial}
          />
        </View> */}
      </ScrollView>
    </ImageBackground>
  );
}

export default PolaBilanganMateriTemplate;
