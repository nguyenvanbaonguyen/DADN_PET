import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {getListPet} from '~/redux/pet/pet';

const data = {
  'Gau Gau': 'dog',
  'My Dieu': 'cat',
};

const Dog = ({item}) => {
  const navigation = useNavigation();
  const name = item.name;
  return (
    <ViewCustom layout="p-10 mx-2 fd-r jc-b ai-c bg-w mt-10" shadow round>
      <Pressable
        onPress={() => {
          navigation.navigate('Pet', {
            index: item._id,
            name: item.name,
          });
        }}>
        <ViewCustom layout="fd-r ai-c">
          <ImageCustom name={data[name]} width={70} height={70} />
          <ViewCustom layout="ai-c ml-10">
            <TextCustom type="ai-c">{item.name}</TextCustom>
          </ViewCustom>
        </ViewCustom>
      </Pressable>
      <ButtonToggle />
    </ViewCustom>
  );
};

const ListDog = () => {
  const dispatch = useDispatch();
  const [listDog, setListDog] = useState([]);
  useEffect(() => {
    const callSetListDog = async () => {
      try {
        const res = await dispatch(getListPet());
        const newListDog = res?.data?.data;
        console.log('result ', newListDog);
        setListDog(newListDog);
      } catch (error) {
        console.log('errors ', error);
      }
    };
    callSetListDog();
  }, [dispatch]);
  return (
    <ViewCustom layout="pb-10">
      {listDog.map(item => (
        <Dog item={item} />
      ))}
    </ViewCustom>
  );
};

export default ListDog;
