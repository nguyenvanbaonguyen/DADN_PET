import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const IntroduceDog = () => {
  const navigation = useNavigation();
  return (
    <>
      <ViewCustom layout="fd-r jc-b my-15 ai-c">
        <TextCustom type="fs-20 fw-bold">Chào Châu!</TextCustom>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('AddPet')}>
          <ViewCustom layout="h-30 w-30 bg-primary jc-c ai-c" round>
            <Icon color={'#252A31'} size={20} name="plus" />
          </ViewCustom>
        </TouchableOpacity>
      </ViewCustom>
      <ViewCustom layout="mt-5">
        <TextCustom type="fs-20 fw-bold">Các thú cưng của bạn</TextCustom>
        <TextCustom type="fs-13 lh-20">
          Nhấn vào một thú cưng để thiết lập điều khiển và cài đặt hoặc điều
          khiển nhanh chế độ tự động.
        </TextCustom>
      </ViewCustom>
    </>
  );
};

export default IntroduceDog;
