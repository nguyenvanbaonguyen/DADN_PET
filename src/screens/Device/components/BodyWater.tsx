import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import useModal from '~/hooks/useModal';
import StartTime from './StartTime';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getSchedules} from '~/redux/schedule/schedule';

function formatHour(time) {
  let [hour, min] = time.split(':');
  if (hour.length === 1) {
    hour = '0' + hour;
  }
  if (min.length === 1) {
    min = '0' + min;
  }
  return [hour, min].join(':');
}

function normalizeItem(item) {
  let result = {};
  if (item.type === 'once') {
    result.repeat = 'Once';
    const date = new Date(item.time);
    const formatDate = date.getHours() + ':' + date.getMinutes();
    result.time = formatHour(formatDate);
    result.feed = item.amount;
  } else {
    result.repeat = 'Again';
    result.time = formatHour(item.hour);
    result.feed = item.amount;
  }
  return result;
}

const RenderItem = ({item}) => {
  const formatItem = normalizeItem(item);
  return (
    <ViewCustom layout="bg-w p-15 fd-r jc-b mx-12" shadow round>
      <ViewCustom layout="ml-6">
        <ViewCustom layout="fd-r">
          <TextCustom type="fs-16 fw-semi">{formatItem.time}</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-12">{formatItem.repeat}</TextCustom>
        <ViewCustom layout="fd-r">
          <TextCustom type="fs-12">Feed: </TextCustom>
          <TextCustom type="fs-12">{formatItem.feed}</TextCustom>
          <TextCustom type="fs-12"> portions</TextCustom>
        </ViewCustom>
      </ViewCustom>

      <ViewCustom layout="mt-15" overflow>
        <ButtonToggle />
      </ViewCustom>
    </ViewCustom>
  );
};

const BodyWater = () => {
  const route = useRoute();
  const index = route?.params?.index;
  const dispatch = useDispatch();

  const stateSchedule = useSelector(state => state.schedule.count);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const callSchedules = async () => {
      try {
        const res = await dispatch(getSchedules(index));
        const newSchedules = res?.data?.data;
        console.log('New schedules ', newSchedules);
        setSchedules(newSchedules);
      } catch (error) {
        console.log('Error call schedule ', index, error);
      }
    };
    callSchedules();
  }, [stateSchedule, dispatch, index]);

  const {Modal, openModal, closeModal} = useModal();
  return (
    <View>
      <ViewCustom layout="p-5">
        <Grid
          data={schedules}
          RenderItem={RenderItem}
          numColumns={1}
          gapX={20}
          gapY={20}
        />
      </ViewCustom>

      <ViewCustom layout="mx-5 p-15 ai-e">
        <ButtonCustom
          size="xs"
          iconLeft="plus"
          content="Add Timer"
          layout="mt-15"
          onPress={openModal}
        />
      </ViewCustom>
      <Modal>
        <ViewCustom layout="w-380 p-20">
          <StartTime closeModal={closeModal} />
        </ViewCustom>
      </Modal>
    </View>
  );
};

export default BodyWater;
