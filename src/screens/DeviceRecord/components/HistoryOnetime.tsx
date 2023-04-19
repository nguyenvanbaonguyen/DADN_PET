import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const HistoryOnetime = () => {
  return (
    <ViewCustom layout="mt-15">
      <TextCustom type="fw-semi fs-14">08:00</TextCustom>
      <ViewCustom layout="mt-8" style={styles.relative}>
        <TextCustom type="fs-13 cl-gray">Pet Feeder M1</TextCustom>
        <TextCustom type="fs-13 cl-gray">Timed Feeder: 3 portions</TextCustom>
        <Icon name="trash" size={20} style={styles.iconStyle} color={'black'} />
      </ViewCustom>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  relative: {
    position: 'relative',
  },
});

export default HistoryOnetime;
