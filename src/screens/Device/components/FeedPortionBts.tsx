import React, {useState} from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import {createSchedule} from '~/redux/schedule/schedule';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const FeedPortion = ({closeModal, times, weekday, type}) => {
  const [value, setValue] = useState(1);

  const route = useRoute();
  const index = route?.params?.index;
  const dispatch = useDispatch();
  const onSubmit = async () => {
    const callSchedule = async () => {
      const amount = value;
      if (type === 'again') {
        console.log('Schedule ', value, times, weekday, type);
        await Promise.all(
          weekday.map(async day => {
            await dispatch(
              createSchedule(index, {amount, hour: times, type, weekday: day}),
            );
          }),
        );
      } else {
        const [hour, min] = times.split(':');
        const temp = new Date(2023, 4, 23, hour, min);
        const timestamp = temp.getTime();
        console.log('Schedule Once ', timestamp, type);
        await dispatch(
          createSchedule(index, {amount, time: timestamp, type}),
        );
      }

      console.log('Miss Tom nhieu');
      closeModal();
    };
    try {
      await callSchedule();
    } catch (error) {
      console.log('error send food ', error);
    }
  };

  return (
    <>
      <ViewCustom layout="mt-30">
        <TextCustom type="fw-semi fs-16">Feed</TextCustom>
        <ViewCustom layout="fd-r ai-c mt-15">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setValue(Math.max(value - 1, 1))}>
            <ViewCustom
              layout="p-1 bg-cloudl w-26 h-26 jc-c ai-c mr-15"
              style={{borderRadius: 26}}>
              <Icon name="minus" size={18} color={'black'} />
            </ViewCustom>
          </TouchableOpacity>

          <TextCustom type="fs-16">{value}</TextCustom>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setValue(value + 1)}>
            <ViewCustom
              layout="p-1 bg-cloudl w-26 h-26 jc-c ai-c mx-15"
              style={{borderRadius: 26}}>
              <Icon name="plus" size={18} color={'black'} />
            </ViewCustom>
          </TouchableOpacity>

          <TextCustom type="fs-16">portions (s)</TextCustom>
        </ViewCustom>
      </ViewCustom>

      <ViewCustom layout="mt-30 ai-e fd-r">
        <ButtonCustom size="x" content="Save" onPress={onSubmit} />
        <ButtonCustom
          size="x"
          outline
          layout="ml-15"
          content="Cancel"
          onPress={closeModal}
        />
      </ViewCustom>
    </>
  );
};

export default FeedPortion;
