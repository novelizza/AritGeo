import React from 'react';
import {View, ScrollView, ImageBackground, Image} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
// import Sound from 'react-native-sound';

const {PolaBilanganStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;
const {bg, panah} = Img;

function PolaBilanganTemplate() {
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
  //     );a
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
        {/*<TextAtoms
          isi="Pola bilangan adalah aturan yang menentukan suatu barisan bilangan. Aturan dinamakan rumus suku ke-n dilambangkan dengan Un."
          styles={PolaBilanganStyle.desc}
        /> */}
        <TextAtoms
          isi="# Pola Bilangan #"
          styles={PolaBilanganStyle.desc}
        />
        <TextAtoms
          isi="1. Barisan Bilangan Asli ??? U??? = n :"
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
          isi="2. Barisan Bilangan Genap ??? U??? = 2n :"
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
            <TextAtoms isi="6," styles={PolaBilanganStyle.desc} />
          </View>
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
            <TextAtoms isi="8,..." styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="3. Barisan Bilangan Ganjil ??? U??? = 2n ??? 1 :"
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
            <TextAtoms isi="5," styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="4. Barisan Bilangan Persegi ??? U??? = n?? :"
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
            <TextAtoms isi="9," styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="5. Barisan Bilangan Persegi Panjang ??? U??? = n ( n + 1 ) :"
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
            <TextAtoms isi="12,..." styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <TextAtoms
          isi="6. Barisan Bilangan Segitiga ??? U??? = ??n(n+1) :"
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
            <TextAtoms isi="6,..." styles={PolaBilanganStyle.desc} />
          </View>
        </View>
        <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="7. Barisan Bilangan Segitiga Pascal :"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Setiap Bilangan dalam barisan merupakan jumlah dari dua bilangan yang berdekatan pada barisan sebelumnya."
            styles={PolaBilanganStyle.descSpesial}
          />
        </View>
        <View style={PolaBilanganStyle.nodeContainerSpesial}>
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
        </View>
        <View style={PolaBilanganStyle.descSpesialContainer}>
          <TextAtoms
            isi="Total Bilangan Setiap Garis :"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Baris 1 : 1, Maka Total Bilangan adalah 1."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Baris 2 : 1 + 1 = 2, Maka Total Bilangan adalah 2."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Baris 3 : 1 + 2 + 1 = 4, Maka Total Bilangan adalah 4."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Baris 4 : 1 + 3 + 3 + 1 = 8, Maka Total Bilangan adalah 8."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Baris 5 : 1 + 4 + 6 + 4 + 1 = 16, Maka Total Bilangan adalah 16."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Baris 6 : 1 + 5 + 10 + 10 + 5 + 1 = 32, Maka Total Bilangan adalah 32."
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="Maka, Barisan Bilangan Segitiga Pascal ??? U??? = n???????"
            styles={PolaBilanganStyle.descSpesial}
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
                isi="(x+y)??? = ax??? + bx????????y + cx????????y?? + ... y???"
                styles={PolaBilanganStyle.descSpesialLain}
              />
              <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
              <TextAtoms
                isi="(x+y)?? = 1x?? + 2x???????y + 3x???????y?? + 1y??x?? + 3x??y + 3xy?? + y??"
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
            isi="Karena koin dilempar 3 kali, kejadian muncul mengikuti pola (A+G)?? sehingga diperoleh hasil pemangkatan :"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="Susunan Kejadian : A?? A??G AG?? G??"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Koefisien Suku : 1 3 3 1"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Hasilnya : A?? + 3A??G + 3AG?? G??"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="A??G = 2 kali muncul Angka dan 1 kali muncul Gambar. n(2A,1G) = 3 ??? n(S) = 2?? = 8"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Maka P(2A,1G)=???"
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
            isi="M = { x | - 3 < x ??? 2,x ?? Bilangan Bulat}"
            styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <TextAtoms
            isi="Tentukan banyaknya himpunan bagian M yang mempunyai 3 anggota!"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms isi=" " styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms isi="Jawab :" styles={PolaBilanganStyle.descSpesial} />
          <TextAtoms
            isi="M = { -2, -1, 0, 1, 2 } ??? n(M) = 5"
            styles={[PolaBilanganStyle.descSpesial, {alignSelf: 'center'}]}
          />
          <TextAtoms
            isi="Pola ??? Pascal : 1 5 10 10 5 1"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="Banyaknya : 0 1 2 3 4 5"
            styles={PolaBilanganStyle.descSpesial}
          />
          <TextAtoms
            isi="???"
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

export default PolaBilanganTemplate;
