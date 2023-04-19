import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import RadioInput from './components/RadioInput';
import TextInputCustom from './components/TextInput';

const pets = [
  {
    name: 'Gâu Gâu',
    gender: 'Đực',
    age: '7 tuần',
    weight: '1.3 kg',
    type: 'Shiba Inu',
  },
  {
    name: 'Mỹ Diệu',
    gender: 'Cái',
    age: '8 tháng',
    weight: '1.12 kg',
    type: 'Mèo Lủng Tường',
  },
];

const PetInfo = () => {
  const route = useRoute();
  const index = route.params.index - 1;
  const [user, setUser] = useState(pets[index]);
  return (
    <ViewCustom layout="px-15 mt-15">
      <TextInputCustom
        content="Tên thú cưng"
        name="name"
        setUser={setUser}
        user={user}
      />

      <RadioInput name="gender" user={user} setUser={setUser} />

      <TextInputCustom
        content="Tuổi"
        name="age"
        setUser={setUser}
        user={user}
      />

      <TextInputCustom
        content="Cân nặng"
        name="weight"
        setUser={setUser}
        user={user}
      />
      <TextInputCustom
        content="Giống loài"
        name="type"
        setUser={setUser}
        user={user}
      />
    </ViewCustom>
  );
};

export default PetInfo;
