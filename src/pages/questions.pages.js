import React from 'react';
import Components from '../components';
import {useSelector} from 'react-redux';

const {TemplateComponents} = Components;

function QuestionsPages() {
  const data = useSelector(state => state.SoalReducer);
  return (
    <TemplateComponents.QuestionsTemplate data={data.Quis[data.halaman]} />
  );
}

export default QuestionsPages;
