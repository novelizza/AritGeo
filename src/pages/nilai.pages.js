import React from 'react';
import Components from '../components';
import {useSelector} from 'react-redux';

const {TemplateComponents} = Components;

function NilaiPages() {
  const data = useSelector(state => state.SoalReducer);
  const [nilai, setNilai] = React.useState(0);

  React.useEffect(() => {
    let tempNilai = 0;
    for (let i = 0; i < 5; i++) {
      if (data.kunci[data.halaman][i] === data.jawaban[i].abc) {
        tempNilai = tempNilai + 20;
      }
    }
    setNilai(tempNilai);
  }, []);
  return <TemplateComponents.NilaiTemplate nilai={nilai} />;
}

export default NilaiPages;
