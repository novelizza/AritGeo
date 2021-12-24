import {combineReducers} from 'redux';
import Sound from 'react-native-sound';

const initialStateSoal = {
  Quis: [
    [
      {
        soal: '1.	Suku ke-20 dari pola bilangan 1, 4, 9, 16, 25, … adalah…',
        jawaban1: '361',
        jawaban2: '324',
        jawaban3: '441',
        jawaban4: '400',
      },
      {
        soal: '2.	Dari Bilangan berikut 1, 4, 9, 16, 25, … .Suku berikut bernilai ?',
        jawaban1: '100',
        jawaban2: '81',
        jawaban3: '64',
        jawaban4: '36',
      },
      {
        soal: '3.	Jumlah bilangan segitiga pascal pada baris ke – 7 adalah …',
        jawaban1: '60',
        jawaban2: '61',
        jawaban3: '62',
        jawaban4: '63',
      },
      {
        soal: '4.	Perhatikan pola bilangan tersebut : 85, 78, …, 64, 57, … , 43, … . Nilai dari titik-titik tersebut adalah …',
        jawaban1: '70, 50, 36',
        jawaban2: '71, 59, 35',
        jawaban3: '70, 59, 36',
        jawaban4: '71, 50, 36',
      },
      {
        soal: '5. Koefisien suku banyak hasil penjabaran bentuk (a+b)⁶ adalah',
        jawaban1: '1, 5, 10, 10, 5, 1',
        jawaban2: '1, 6, 15, 20, 15, 6, 1',
        jawaban3: '1, 7, 21, 35, 21, 7, 1',
        jawaban4: '1, 7, 21, 35, 35, 21, 7, 1',
      },
    ],
    [
      {
        soal: '1. Selama 30 hari, Sukardi berhasil mengumpulkan telur ayam sebanyak 19050 butir. Jika banyak telur ayam terdapat dikumpulkan pada setiap hari hanya membentuk baris baris, dan pada hari pertama ia mendapatkan 20 butir telur, maka pada hari terakhir ia mendapatkan telur sebanyak … butir',
        jawaban1: '1220',
        jawaban2: '1230',
        jawaban3: '1240',
        jawaban4: '1250',
      },
      {
        soal: '2. Sebuah barisan aritmatika, suku pertamannya 5 dan beda antar suku yang terdekat 4. Tentukan suku ke 20.',
        jawaban1: '81',
        jawaban2: '77',
        jawaban3: '73',
        jawaban4: '69',
      },
      {
        soal: '3. Jika pada suatu barisan aritmatika diketahui U₅ =12 dan U₁₅=27. Maka U₂₅ adalah …',
        jawaban1: '54',
        jawaban2: '45',
        jawaban3: '42',
        jawaban4: '32',
      },
      {
        soal: '4. Dalam sebuah Gedung pertunjukan terdapat 12 baris kursi. Pada baris pertama terdapat 8 kursi, baris berikutnya selalu bertambah 2 dari baris didepannya. Banyaknya kursi pada baris kelima adalah',
        jawaban1: '8',
        jawaban2: '14',
        jawaban3: '16',
        jawaban4: '18',
      },
      {
        soal: '5. Jumlah bilangan kelipatan 3 antara 100 dan 300 adalah…',
        jawaban1: '39474',
        jawaban2: '30702',
        jawaban3: '13167',
        jawaban4: '15351',
      },
    ],
    [
      {
        soal: '1. Sebuah besi dipotong menjadi 5 bagian, sehingga membentuk barisan aritmatika. Jika panjang besi terpendek 1,2 m dan terpanjang 2,4 m, maka panjang besi sebelum dipotong adalah ....',
        jawaban1: '7,5 meter',
        jawaban2: '8,0 meter',
        jawaban3: '8,2 meter',
        jawaban4: '9,0 meter',
      },
      {
        soal: '2. Jumlah 10 suku pertama dari deret aritmatika 5, 7, 9, 11, 13, 15, … adalah …',
        jawaban1: '136',
        jawaban2: '140',
        jawaban3: '145',
        jawaban4: '151',
      },
      {
        soal: '3. Diketahui pada suatu deret aritmatika : 3, 6, 12, 27, …, hitunglah beda dan suku ke-8 dari contoh deret aritmatika tersebut.',
        jawaban1: 'Beda : 3, U₈ = 24',
        jawaban2: 'Beda : 2, U₈ = 31',
        jawaban3: 'Beda : 3, U₈ = 45',
        jawaban4: 'Beda : 4, U₈ = 22',
      },
      {
        soal: '4. Misalkan diketahui nilai dari suku ke-16 pada suatu deret aritmatika adalah 34 dengan bedanya adalah 3, maka hitunglah U₁nya ?',
        jawaban1: '2',
        jawaban2: '3',
        jawaban3: '4',
        jawaban4: '7',
      },
      {
        soal: '5. Produksi pupuk organik menghasilkan 100 ton pupuk pada bulan pertama, setiap bulannya menaikan produksinya secara tetap 5 ton. Jumlah pupuk yang diproduksi selama 1 tahun adalah…',
        jawaban1: '1200 Ton',
        jawaban2: '1260 Ton',
        jawaban3: '1500 Ton',
        jawaban4: '1530 Ton',
      },
    ],
    [
      {
        soal: '1. Suku ke-5 dari deret geometri adalah 243, sementara hasil bagi antara suku ke-9 dengan suku ke-6 adalah 27, berapa jumlah suku ke-2nya?',
        jawaban1: '4',
        jawaban2: '8',
        jawaban3: '9',
        jawaban4: '27',
      },
      {
        soal: '2. Tentukan jumlah dari deret geometri 2 + 6 + 18 + … + 4374',
        jawaban1: '6750',
        jawaban2: '6560',
        jawaban3: '4575',
        jawaban4: '4750',
      },
      {
        soal: '3. Seutas tali dibagi menjadi 6 bagian, sehingga bagian-bagiannya membentuk barisan geometri. Jika Panjang tali terpendek 9 cm dan panjang tali terpanjang 288 cm, Panjang tali mula-mula adalah …',
        jawaban1: '567',
        jawaban2: '576',
        jawaban3: '586',
        jawaban4: '596',
      },
      {
        soal: '4. Diketahui sebuah barisan geomtri 3, 6, 12, … maka suku ketujuh dari barisan geomteri tersebut',
        jawaban1: '196',
        jawaban2: '216',
        jawaban3: '192',
        jawaban4: '180',
      },
      {
        soal: '5. Keuntungan sebuah percetakan setiap bulannya bertambah menjadi dua kali lipat dari keuntungan bulan sebelumnya. Jika keuntungan bulan pertama Rp600.000,00, maka keuntungan percetakan tersebut pada bulan keenam adalah …',
        jawaban1: '17.000.000',
        jawaban2: '19.200.000',
        jawaban3: '19.850.000',
        jawaban4: '20.200.000',
      },
    ],
    [
      {
        soal: '1. Suatu perusahaan memproduksi 1000 barang pada tahun pertama. Setiap tahun perusahaan tersebut menaikkan produksi sebesar 200 satuan barang. Banyaknya produksi pada tahun ke 10 adalah …',
        jawaban1: '2700',
        jawaban2: '2800',
        jawaban3: '2900',
        jawaban4: '3000',
      },
      {
        soal: '2. Sebuah deret geometri memliki suku pertama a = 2, rasio = 3. Carilah suku U_5(suku ke 5) dan S_5 (jumlah 5 suku pertama)',
        jawaban1: 'U₅ = 162 dan S₅  = 242',
        jawaban2: 'U₅ = 158 dan S₅  = 238',
        jawaban3: 'U₅ = 154 dan S₅  = 234',
        jawaban4: 'U₅ = 152 dan S₅  = 232',
      },
      {
        soal: '3. Jumlah semua bilangan kelipatan 3 dan 4 antara 200 dan 450 adalah…',
        jawaban1: '8700',
        jawaban2: '6804',
        jawaban3: '6360',
        jawaban4: '6300',
      },
      {
        soal: '4. Di dalam sebuah aula, ada 12 baris kursi. Pada barus pertama 10 kursi, bbaris kedua 14 kursi, baris ketiga 18 kursi. Dan seterusnya. Dipojok ruangan terlihat 6 kursi cadangan. Jumlah seluruh kursi didalam aula tersebut adalah…',
        jawaban1: '384',
        jawaban2: '390',
        jawaban3: '444',
        jawaban4: '450',
      },
      {
        soal: '5. Suku kedua dan keempat barisan geomteri berturut-turut adalah 6 dan 24. Suku keenam barisan tersebut adalah…',
        jawaban1: '86',
        jawaban2: '96',
        jawaban3: '136',
        jawaban4: '192',
      },
    ],
  ],
  kunci: [
    [4, 4, 3, 4, 1],
    [4, 1, 4, 3, 3],
    [4, 2, 1, 3, 4],
    [3, 2, 1, 3, 2],
    [2, 1, 2, 2, 2],
  ],
  halaman: 0,
  jawaban: [],
};

const SoalReducer = (state = initialStateSoal, action) => {
  if (action.type === 'SET_STATESOAL') {
    return {
      ...state,
      [action.inputType]: action.inputValue,
    };
  }
  if (action.type === 'SET_JAWABAN') {
    return {
      ...state,
      ['jawaban']: state.jawaban.concat(action.inputValue),
    };
  }
  if (action.type === 'UPDATE_JAWABAN') {
    return {
      ...state,
      ['jawaban']: [
        ...state.jawaban.slice(0, action.urutValue),
        action.inputValue,
        ...state.jawaban.slice(action.urutValue + 1),
      ],
    };
  }
  return state;
};

const initialMusic = {
  uri: '../assets/initialMusic/happy.mp3',
  backSound: '',
  isPlay: true,
};

const MusicReducer = (state = initialMusic, action) => {
  if (action.type === 'PLAY_MUSIC') {
    state.backSound = new Sound(
      require('../assets/music/happy.mp3'),
      (error, _sound) => {
        if (error) {
          console.log('play');
          alert('error' + error.message);
          return;
        }
        state.backSound.play(() => {
          state.backSound.release();
        });
      },
    );
  }
  if (action.type === 'STOP_MUSIC') {
    state.backSound.stop(() => {
      console.log('Stop');
    });
  }
  if (action.type === 'STARTSTOP_MUSIC') {
    if (state.isPlay) {
      state.backSound.stop(() => {
        console.log('Stop');
      });
    } else {
      state.backSound = new Sound(
        require('../assets/music/happy.mp3'),
        (error, _sound) => {
          if (error) {
            console.log('play');
            alert('error' + error.message);
            return;
          }
          state.backSound.play(() => {
            state.backSound.release();
          });
        },
      );
    }
    return {
      ...state,
      ['isPlay']: !state.isPlay,
    };
  }
  return state;
};

const reducer = combineReducers({
  SoalReducer,
  MusicReducer,
});

export default reducer;
