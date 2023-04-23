import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {getPet} from '~/redux/pet/pet';
// import RadioInput from './components/RadioInput';
import TextInputCustom from './components/TextInput';

const petInfo = {
  index: '',
  name: 'Gau Gau',
  gender: 'Đực',
  age: '7 tuần',
  weight: '1.3 kg',
  type: 'Shiba Inu',
};

const PetInfo = () => {
  const route = useRoute();
  const index = route.params.index;
  const dispatch = useDispatch();
  const [pet, setPet] = useState(petInfo);
  useEffect(() => {
    const callPet = async id => {
      try {
        const res = await dispatch(getPet(id));
        console.log('petinfo ', res?.data?.data);
        setPet(res?.data?.data);
      } catch (error) {
        console.log('errors ', error);
        // Object.entries(error).forEach(([key, value]) =>
        //   console.log('errors ', key, value),
        // );
      }
    };
    callPet(index);
  }, [index, dispatch]);
  return (
    <ViewCustom layout="px-15 mt-15">
      <TextInputCustom
        content="Tên thú cưng"
        name="name"
        setUser={setPet}
        user={pet}
      />

      {/* <RadioInput name="gender" user={user} setUser={setUser} /> */}

      {/* <TextInputCustom content="Tuổi" name="age" setUser={setPet} user={pet} /> */}

      {/* <TextInputCustom
        content="Cân nặng"
        name="weight"
        setUser={setPet}
        user={pet}
      /> */}
      <TextInputCustom
        content="Giống loài"
        name="type"
        setUser={setPet}
        user={pet}
      />
    </ViewCustom>
  );
};

export default PetInfo;
