import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonMulti from '~/components/ButtonCustom/ButtonMulti';
import Chart from '~/components/Chart/Chart';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import ConnectDevice from '../Pet/components/ConnectDevice';
import Stat from '../Stat/Stat';
import IntroduceDog from './components/IntroduceDog';
import ListDog from './components/ListDog';

const Home = () => {
  const data = ['Gâu Gâu', 'Mỹ diệu'];
  return (
    <ViewCustom layout="f-1 px-15">
      <ScrollView showsVerticalScrollIndicator={false}>
        <IntroduceDog />
        <ListDog />

        <ViewCustom layout="py-15 m-2 px-3 mt-15 bg-w br-6" shadow>
          <TextCustom type="fs-18 fw-bold">Cleaning Report</TextCustom>
          <ViewCustom layout="mt-15">
            <ButtonMulti data={data} />
            <ViewCustom layout="mt-15" style={{marginLeft: -15}}>
              <Chart />
            </ViewCustom>
          </ViewCustom>
        </ViewCustom>
      </ScrollView>
    </ViewCustom>
  );
};

export default Home;
