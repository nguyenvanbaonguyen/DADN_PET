import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import Appear from '~/components/Appear/Appear';

const Notification = ({item: {time, content, type}}: any) => {
  const danger = type === 'danger';
  return (
    <View style={[styles.wrapper]}>
      <View style={[styles.lineUp, danger && {backgroundColor: '#D7331C'}]} />
      <TextCustom type="fs-14 fw-semi">{time}</TextCustom>
      <ViewCustom layout="mt-5">
        <TextCustom type="fs-13 lh-20">{content}</TextCustom>
      </ViewCustom>

      <Appear condition={danger}>
        <ViewCustom layout="fd-r mt-15">
          <ButtonCustom size="xs" content="Kích hoạt" danger full />
          <ButtonCustom
            size="xs"
            content="Kích hoạt"
            outline
            full
            layout="ml-10"
          />
        </ViewCustom>
      </Appear>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F7F9',
    padding: 15,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#697D951A',
    borderRadius: 6,
    position: 'relative',
    marginTop: 15,
  },
  lineUp: {
    height: 3,
    width: 400,
    position: 'absolute',
    top: 0,
    backgroundColor: '#28A138',
  },
});

export default Notification;
