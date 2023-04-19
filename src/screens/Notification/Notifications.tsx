import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import Notification from './components/Notification';

const data = [
  {
    time: '13:30 - Jan 18',
    content:
      'Thú cưng đã ăn đủ 3 bữa ăn trong ngày với khẩu phần định sẵn từ chủ.',
    type: 'normal',
  },
  {
    type: 'danger',
    time: '13:30 - Jan 19',
    content:
      'Lần đi vệ sinh gần nhất: cách đây 10 phút (cũng là lần thứ 4 trong ngày). Chế độ tự động đang tắt. Bật để kích hoạt.',
  },
  {
    time: '13:30 - Jan 20',
    content: 'Buồng vệ sinh đã được dọn sạch sẽ bằng chế độ ấn nút trực tiếp.',
    type: 'normal',
  },
  {
    time: '13:30 - Jan 21',
    content: 'Buồng vệ sinh đã được dọn sạch sẽ bằng chế độ ấn nút trực tiếp.',
    type: 'normal',
  },
  {
    type: 'danger',
    time: '13:30 - Jan 13',
    content:
      'Lần đi vệ sinh gần nhất: cách đây 10 phút (cũng là lần thứ 4 trong ngày). Chế độ tự động đang tắt. Bật để kích hoạt.',
  },
];

const Notifications = () => {
  return (
    <ViewCustom layout="f-1 px-20 pb-10">
      <TextCustom type="fs-20 fw-semi">Notifications</TextCustom>
      <FlatList
        data={data}
        renderItem={Notification}
        keyExtractor={item => item.time}
      />
    </ViewCustom>
  );
};

export default Notifications;
