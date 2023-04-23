import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';
import Grid from '~/components/Grid/Grid';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import { getListDevices } from '~/redux/listDevice/listDevice';
import {devicesSmall} from '../dataInHome';

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

const RenderItem = ({item}) => {
  return (
    <ViewCustom layout="bg-w p-15" shadow round>
      <ViewCustom layout="fd-r ai-c">
        <ImageCustom height={40} width={40} name={data[item.name]} />
        <ViewCustom layout="ml-6">
          <TextCustom type="fs-15 fw-semi">{item.name}</TextCustom>
        </ViewCustom>
      </ViewCustom>

      <ViewCustom layout="mt-15 fd-r jc-b ai-c" overflow>
        <TextCustom type="fs-16">On</TextCustom>
        <ButtonToggle />
      </ViewCustom>
    </ViewCustom>
  );
};

const MonitorDevice = () => {
  const route = useRoute();
  const index = route?.params?.index;

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
      <ViewCustom layout="mt-15">
        <TextCustom type="fs-20 fw-bold">Monitoring!</TextCustom>
        <TextCustom type="fs-13 lh-20">
          Điều khuyển nhanh chế độ tự động
        </TextCustom>
      </ViewCustom>

      <ViewCustom layout="p-5 mt-15">
        <Grid
          data={listDevice}
          RenderItem={RenderItem}
          numColumns={2}
          gapX={20}
          gapY={20}
        />
      </ViewCustom>
    </>
  );
};

export default MonitorDevice;
