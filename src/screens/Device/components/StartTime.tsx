import React from 'react';
// import {StyleSheet} from 'react-native';
import TextCustom from '~/components/TextCustom/TextCustom';
import TimeScroll from './TimeScroll';
// import ViewCustom from '~/components/ViewCustom/ViewCustom';
// import DatePicker from './DatePicker';

const StartTime = ({closeModal}) => {
  return (
    <>
      <TextCustom type="fw-semi fs-16">Start Time</TextCustom>
      <TimeScroll nHour={24} nMin={60} closeModal={closeModal} />
    </>
  );
};

export default StartTime;
