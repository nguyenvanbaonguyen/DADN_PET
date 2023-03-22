import React from 'react';
import {Button, View} from 'react-native';
import {navigate} from '~/navigators/globalNav';
import {timers} from '../Pet/dataInHome';
import Icon from 'react-native-vector-icons/AntDesign';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import useBts from '~/hooks/useBottomSheet';
import BottomSheet from '~/components/BottomSheet/BottomModal';
import FeedTimer from '../FeedTimer/FeedTimer';

const RenderItem = ({item}) => {
  return (
    <ViewCustom layout="bg-w p-15 fd-r jc-b mx-12" shadow round>
      <ViewCustom layout="ml-6">
        <ViewCustom layout="fd-r">
          <TextCustom type="fs-16 fw-semi">{item.hour}</TextCustom>
          <TextCustom type="fs-16 fw-semi">:</TextCustom>
          <TextCustom type="fs-16 fw-semi">{item.minute}</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-12">{item.repeat}</TextCustom>
        <ViewCustom layout="fd-r">
          <TextCustom type="fs-12">Feed: </TextCustom>
          <TextCustom type="fs-12">{item.feed}</TextCustom>
          <TextCustom type="fs-12"> portions</TextCustom>
        </ViewCustom>
      </ViewCustom>

      <ViewCustom layout="mt-15" overflow>
        <ButtonToggle />
      </ViewCustom>
    </ViewCustom>
  );
};

const Device = ({navigation}) => {
  const {presentBts, BottomSheet: Sheet} = useBts(BottomSheet);
  return (
    <View>
      <Button onPress={() => navigate('DeviceSettings')} title="Settings" />
      <Button onPress={() => navigate('PetRecord')} title="Record" />
      <ViewCustom layout="p-5 mt-15">
        <Grid
          data={timers}
          RenderItem={RenderItem}
          numColumns={1}
          gapX={20}
          gapY={20}
        />
      </ViewCustom>

      <ViewCustom layout="mx-5 p-15">
        <ButtonCustom
          size="xs"
          iconLeft="plus"
          content="Add Timer"
          layout="mt-15"
          onPress={() => presentBts()}
        />
      </ViewCustom>
      <Sheet>
        <FeedTimer />
      </Sheet>
    </View>
  );
};

export default Device;
