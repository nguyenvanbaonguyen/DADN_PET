import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {resetNavigate} from '~/navigators/globalNav';

const data = [{name: 'Gâu Gâu'}, {name: 'Mỹ Diệu'}];

const Dog = ({item}) => {
  const navigation = useNavigation();
  return (
    <ViewCustom layout="p-10 mx-2 fd-r jc-b ai-c bg-w mt-10" shadow round>
      <Pressable onPress={() => navigation.navigate('Pet')}>
        <ViewCustom layout="fd-r ai-c">
          <ImageCustom name="dog" width={70} height={70} />
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
  return (
    <ViewCustom layout="pb-10">
      {data.map(item => (
        <Dog item={item} />
      ))}
    </ViewCustom>
  );
};

export default ListDog;
