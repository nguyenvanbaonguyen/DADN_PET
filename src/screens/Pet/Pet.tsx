import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import General from '../Stat/General';
import ConnectDevice from './components/ConnectDevice';
import MonitorDevice from './components/MonitorDevice';

const Pet = ({navigation}) => {
  return (
    <ViewCustom layout="f-1 px-15 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ConnectDevice />
        <MonitorDevice />

        <ViewCustom layout="mt-15 pb-30">
          <TextCustom type="fs-20 fw-bold">Thống kê</TextCustom>
          <Pressable onPress={() => navigation.navigate('Stat')}>
            <ViewCustom layout="px-5 py-20">
              <General />
            </ViewCustom>
          </Pressable>
        </ViewCustom>
      </ScrollView>
    </ViewCustom>
  );
};

export default Pet;
