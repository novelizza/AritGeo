import React from 'react';
import Components from '../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const {TemplateComponents} = Components;

function SplashScreenPages() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(function () {
      dispatch({
        type: 'PLAY_MUSIC',
      });
      navigation.replace('Home');
    }, 3000);
  });
  return <TemplateComponents.SplashScreenTemplate />;
}

export default SplashScreenPages;
