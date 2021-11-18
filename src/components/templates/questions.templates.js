import React from 'react';
import {View, TouchableOpacity, ImageBackground, AppState} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import {useNavigation} from '@react-navigation/native';
import propTypes from 'prop-types';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch, useSelector} from 'react-redux';
import Sound from 'react-native-sound';

import Img from '../../assets';
const {bg} = Img;

const {QuisStyle} = Styles.Stylesheets;

const {TextAtoms} = Atoms;

function QuestionsTemplate(props) {
  const [toggleCheckBox, setToggleCheckBox] = React.useState({
    satu: false,
    dua: false,
    tiga: false,
    empat: false,
  });
  const [temp, setTemp] = React.useState('');
  const [urut, setUrut] = React.useState(0);
  const [next, setNext] = React.useState(true);
  const [soal, setSoal] = React.useState({
    soal: '',
    jawaban1: '',
    jawaban2: '',
    jawaban3: '',
    jawaban4: '',
  });
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(
    appState.current,
  );
  let sound;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.SoalReducer);

  React.useEffect(() => {
    setSoal({
      ['soal']: props.data[urut].soal,
      ['jawaban1']: props.data[urut].jawaban1,
      ['jawaban2']: props.data[urut].jawaban2,
      ['jawaban3']: props.data[urut].jawaban3,
      ['jawaban4']: props.data[urut].jawaban4,
    });
    if (next === false) {
      var jawaban = data.jawaban[urut];
      if (jawaban !== undefined) {
        if (jawaban.abc === 1) {
          setToggleCheckBox({
            ...toggleCheckBox,
            ['satu']: true,
            ['dua']: false,
            ['tiga']: false,
            ['empat']: false,
          });
        } else if (jawaban.abc === 2) {
          setToggleCheckBox({
            ...toggleCheckBox,
            ['dua']: true,
            ['satu']: false,
            ['tiga']: false,
            ['empat']: false,
          });
        } else if (jawaban.abc === 3) {
          setToggleCheckBox({
            ...toggleCheckBox,
            ['tiga']: true,
            ['satu']: false,
            ['dua']: false,
            ['empat']: false,
          });
        } else {
          setToggleCheckBox({
            ...toggleCheckBox,
            ['empat']: true,
            ['satu']: false,
            ['dua']: false,
            ['tiga']: false,
          });
        }
      }
    }
  }, [urut]);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      sound.stop(() => {
        console.log('Stop');
        dispatch({
          type: 'PLAY_MUSIC',
        });
      });
      subscription.remove();
    };
  }, []);

  React.useEffect(() => {
    if (appStateVisible === 'active') {
      sound = new Sound(
        require('../../assets/music/solo.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound.play(() => {
            sound.release();
          });
        },
      );
    }
    dispatch({
      type: 'STOP_MUSIC',
    });
  }, [appStateVisible]);

  return (
    <ImageBackground source={bg} resizeMode="cover" style={QuisStyle.bg}>
      <View style={QuisStyle.questionsContainer}>
        <TextAtoms isi="Quis" styles={QuisStyle.questionsAtasTXT} />
        <TextAtoms isi={soal.soal} styles={QuisStyle.questionsSoal} />

        <View style={QuisStyle.soalContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.satu}
            onValueChange={() => {
              setToggleCheckBox({
                ...toggleCheckBox,
                ['satu']: true,
                ['dua']: false,
                ['tiga']: false,
                ['empat']: false,
              });
              setTemp({
                jawaban: 'jawaban 1',
                abc: 1,
              });
            }}
          />
          <TextAtoms isi={soal.jawaban1} styles={QuisStyle.jawabanTXT} />
        </View>

        <View style={QuisStyle.soalContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.dua}
            onValueChange={() => {
              setToggleCheckBox({
                ...toggleCheckBox,
                ['satu']: false,
                ['dua']: true,
                ['tiga']: false,
                ['empat']: false,
              });
              setTemp({
                jawaban: 'jawaban 2',
                abc: 2,
              });
            }}
          />
          <TextAtoms isi={soal.jawaban2} styles={QuisStyle.jawabanTXT} />
        </View>

        <View style={QuisStyle.soalContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.tiga}
            onValueChange={() => {
              setToggleCheckBox({
                ...toggleCheckBox,
                ['satu']: false,
                ['dua']: false,
                ['tiga']: true,
                ['empat']: false,
              });
              setTemp({
                jawaban: 'jawaban 3',
                abc: 3,
              });
            }}
          />
          <TextAtoms isi={soal.jawaban3} styles={QuisStyle.jawabanTXT} />
        </View>

        <View style={QuisStyle.soalContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.empat}
            onValueChange={() => {
              setToggleCheckBox({
                ...toggleCheckBox,
                ['satu']: false,
                ['dua']: false,
                ['tiga']: false,
                ['empat']: true,
              });
              setTemp({
                jawaban: 'jawaban 4',
                abc: 4,
              });
            }}
          />
          <TextAtoms isi={soal.jawaban4} styles={QuisStyle.jawabanTXT} />
        </View>
        <View style={QuisStyle.bawah}>
          {urut === 0 ? (
            <View />
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (data.jawaban[urut] !== temp) {
                  if (next === true) {
                    dispatch({
                      type: 'SET_JAWABAN',
                      inputValue: temp,
                    });
                  } else {
                    dispatch({
                      type: 'UPDATE_JAWABAN',
                      inputValue: temp,
                      urutValue: urut,
                    });
                  }
                }
                setUrut(urut - 1);
                setNext(false);
              }}
              style={QuisStyle.buttonNextBack}>
              <TextAtoms isi="Kembali" styles={QuisStyle.buttonNextBackTXT} />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              if (data.jawaban[urut] !== undefined) {
                dispatch({
                  type: 'UPDATE_JAWABAN',
                  inputValue: temp,
                  urutValue: urut,
                });
              } else {
                dispatch({
                  type: 'SET_JAWABAN',
                  inputValue: temp,
                });
              }
              setToggleCheckBox({
                ...toggleCheckBox,
                ['satu']: false,
                ['dua']: false,
                ['tiga']: false,
                ['empat']: false,
              });

              setTemp({});

              if (urut === 4) {
                navigation.replace('Nilai');
              } else {
                setUrut(urut + 1);
                setNext(true);
              }
            }}
            style={QuisStyle.buttonNextBack}>
            <TextAtoms
              isi={urut === 4 ? 'Selesai' : 'Lanjut'}
              styles={QuisStyle.buttonNextBackTXT}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

QuestionsTemplate.propTypes = {
  data: propTypes.any,
};

QuestionsTemplate.defaultProps = {
  data: null,
};

export default QuestionsTemplate;
