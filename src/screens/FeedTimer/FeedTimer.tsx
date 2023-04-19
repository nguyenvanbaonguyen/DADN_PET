import React, {useRef, useState} from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import StartTime from './components/StartTime';
import DatePicker from './components/DatePicker';
import FeedPortion from './components/FeedPortion';

const FeedTimer = () => {
  return (
    <ViewCustom layout="pt-20 px-15">
      <StartTime />

      <DatePicker />

      <FeedPortion />

      <ViewCustom layout="mt-30 ai-e">
        <ButtonCustom size="x" outline content="Delete" />
      </ViewCustom>
    </ViewCustom>
  );
};

export default FeedTimer;
