import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {navigate} from '~/navigators/globalNav';
import Icon from 'react-native-vector-icons/AntDesign';
import Grid from '~/components/Grid/Grid';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getListDevices} from '~/redux/listDevice/listDevice';

const data = {
  'Pet Cleaner C3': 'petCleanerBig',
  'Pet Cleaner C4': 'petCleanerBig',
  'Pet Cleaner C5': 'petCleanerBig',
  'Pet Feeder M1': 'petFeederBig',
  'Dispenser F3': 'petFeederBig',
  'Dispenser F4': 'petFeederBig',
  'Dispenser F5': 'petFeederBig',
  'Pet Feeder M2': 'petFeederBig',
  'Pet Feeder M3': 'petFeederBig',
  'Pet Water W2': 'petDispenserBig',
  'Pet Water W3': 'petDispenserBig',
  'Pet Water W4': 'petDispenserBig',
};

const renderItem = ({item}) => (
  <TouchableOpacity
    activeOpacity={0.75}
    onPress={() => {
      navigate('Device', {
        index: item._id,
        name: item.name,
        type: item.type,
      });
    }}>
    <ViewCustom layout="ai-c">
      <ImageCustom height={64} width={64} name={data[item.name]} />
      <ViewCustom layout="bg-cloudl w-f h-28 ai-c jc-c mt-4" round>
        <TextCustom type="fs-12 fw-semi">{item.name}</TextCustom>
      </ViewCustom>
    </ViewCustom>
  </TouchableOpacity>
);

const ConnectDevice = () => {
  const route = useRoute();
  const index = route?.params?.index;
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [listDevice, setListDevice] = useState([]);

  useEffect(() => {
    const callSetListDevice = async () => {
      try {
        const res = await dispatch(getListDevices(index));
        const newListDevice = res?.data?.data;
        console.log('result ', newListDevice);
        setListDevice(newListDevice);
      } catch (error) {
        console.log('errors ', error);
      }
    };
    callSetListDevice();
  }, []);

  return (
    <>
      <ViewCustom layout="fd-r jc-b my-15 ai-c">
        <ViewCustom layout="fd-r">
          <TextCustom type="fs-20 fw-bold">{route?.params?.name}</TextCustom>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              navigation.navigate('PetInfo', {
                index: route?.params?.index,
              });
            }}>
            <ViewCustom layout="h-30 w-30 bg-cloudl jc-c ai-c ml-10 br-90">
              <Icon color={'#252A31'} size={20} name="info" />
            </ViewCustom>
          </TouchableOpacity>
        </ViewCustom>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('AddDevice', {
              index: route?.params?.index,
              name: route?.params?.name,
            });
          }}>
          <ViewCustom layout="h-30 w-30 bg-primary jc-c ai-c" round>
            <Icon color={'#252A31'} size={20} name="plus" />
          </ViewCustom>
        </TouchableOpacity>
      </ViewCustom>

      <ViewCustom layout="p-15 bg-w mx-5" round shadow>
        <TextCustom type="fs-16 fw-bold">Connected Device</TextCustom>

        <ViewCustom layout="mt-4 mb-16">
          <TextCustom type="fw-normal fs-14">
            Nhấn vào một thiết bị để thiết lập điều khiển và cài đặt.
          </TextCustom>

          <ViewCustom layout="mt-15" round>
            <Grid
              data={listDevice}
              RenderItem={renderItem}
              numColumns={3}
              gapX={15}
            />
          </ViewCustom>
        </ViewCustom>
      </ViewCustom>
    </>
  );
};

export default ConnectDevice;
