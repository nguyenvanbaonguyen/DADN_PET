import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import Grid from '~/components/Grid/Grid';
import Pagination from '~/components/Pagination/Pagination';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {getHistory} from '~/redux/device/device';
// import HistoryDay from './components/HistoryDay';
import HistoryOnetime from './components/HistoryOnetime';

function type2Device(type) {
  if (type === 'food') {
    return 'Pet Feeder';
  } else if (type === 'water') {
    return 'Pet Water';
  }
  return 'Pet Cleaner';
}

function type2Action(type, amount) {
  if (type === 'food') {
    return `Feed: ${amount}`;
  } else if (type == 'water') {
    return `Water: ${amount}`;
  }
  return 'Clean';
}

const renderItem = ({item}) => {
  let device = type2Device(item.type);
  let action = type2Action(item.type, item.amount);
  let time = item.time;
  return <HistoryOnetime device={device} action={action} time={time} />;
}

const DeviceRecord = () => {
  const route = useRoute();
  const index = route.params.index;
  const dispatch = useDispatch();
  const [device, setDevice] = useState([]);
  useEffect(() => {
    const callDevice = async id => {
      try {
        const res = await dispatch(getHistory(id));
        console.log('historyinfo ', res?.data?.data);
        setDevice(res?.data?.data);
      } catch (error) {
        console.log('errors ', error);
        // Object.entries(error).forEach(([key, value]) =>
        //   console.log('errors ', key, value),
        // );
      }
    };
    callDevice(index);
  }, [index, dispatch]);

  return (
    <ScrollView>
      <ViewCustom layout="px-15 mt-15 pb-30">
        <ViewCustom layout="fd-r jc-b">
          <TextCustom type="fs-20 fw-semi">Lịch sử hoạt động</TextCustom>
          <ViewCustom layout="h-30 w-30 jc-c ai-c">
            <Icon color={'black'} size={25} name="filter" />
          </ViewCustom>
        </ViewCustom>
        <Grid
          data={device}
          RenderItem={renderItem}
          numColumns={1}
          gapX={0}
          gapY={0}
        />
        <ViewCustom layout="ai-e mt-10">
          <ButtonCustom size="xs" content="Download" layout="mt-15" />
        </ViewCustom>
        <ViewCustom layout="ai-c">
          <Pagination />
        </ViewCustom>
      </ViewCustom>
    </ScrollView>
  );
};

export default DeviceRecord;
