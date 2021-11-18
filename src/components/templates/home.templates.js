import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert,
} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import Img from '../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-remix-icon';
import Color from '../../styles/colors';
import {useDispatch} from 'react-redux';

const {HomeStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

const {Logo, Mascot, bg} = Img;

function HomeTemplate(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  React.useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        // console.log();
        // navigation.goBack();
      } else {
        Alert.alert('Tunggu!', 'Apakah kamu yakin akan keluar?', [
          {
            text: 'Tidak',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Keluar',
            onPress: () => {
              dispatch({
                type: 'STOP_MUSIC',
              });
              BackHandler.exitApp();
            },
          },
          ,
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={HomeStyle.container}>
      <ImageBackground source={bg} resizeMode="cover" style={HomeStyle.bg}>
        <Image style={HomeStyle.logo} source={Logo} />
        <View style={HomeStyle.ListButton}>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('Materi')}>
              <Icon name="book-2-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="MATERI" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('ContohSoal')}>
              <Icon name="file-text-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="CONTOH SOAL" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyle.ListButton}>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('Quis')}>
              <Icon name="draft-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="QUIS" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.buttonContainer}>
            <TouchableOpacity
              style={HomeStyle.button}
              onPress={() => navigation.navigate('Tentang')}>
              <Icon name="user-3-fill" size="45" color={Color.CLOUD_COLOR} />
              <TextAtoms isi="TENTANG" styles={HomeStyle.buttonTXT} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyle.mascotContainer}>
          <View style={HomeStyle.mascotTXTContainer}>
            <TextAtoms isi="Belajar mudah ?" styles={HomeStyle.mascotTXT} />
            <TextAtoms isi="AritGeo saja" styles={HomeStyle.mascotTXT} />
          </View>
          <Image style={HomeStyle.logo} source={Mascot} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeTemplate;
