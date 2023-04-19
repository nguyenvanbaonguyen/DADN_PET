import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {callMe} from '~/redux/user';

const IntroduceDog = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const callUserName = async () => {
      try {
        const res = await dispatch(callMe());
        setUserName(res?.data?.name);
      } catch (error) {
        console.log('errors ', error);
        // Object.entries(error).forEach(([key, value]) =>
        //   console.log('errors ', key, value),
        // );
      }
    };
    callUserName();
  }, [dispatch]);
  return (
    <>
      <ViewCustom layout="fd-r jc-b my-15 ai-c">
        <TextCustom type="fs-20 fw-bold">Chào {userName}!</TextCustom>
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
