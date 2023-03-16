import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {navigate} from '~/navigators/globalNav';
import Icon from 'react-native-vector-icons/AntDesign';
import {devices} from '../dataInHome';
import Grid from '~/components/Grid/Grid';

const renderItem = ({item}) => (
  <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('Device')}>
    <ViewCustom layout="ai-c">
      <ImageCustom height={64} width={64} name={item.image} />
      <ViewCustom layout="bg-cloudl w-f h-28 ai-c jc-c mt-4" round>
        <TextCustom type="fs-12 fw-semi">{item.name}</TextCustom>
      </ViewCustom>
    </ViewCustom>
  </TouchableOpacity>
);

const ConnectDevice = () => {
  return (
    <>
      <ViewCustom layout="fd-r jc-b my-15 ai-c">
        <TextCustom type="fs-20 fw-bold">Chào Châu!</TextCustom>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigate('AddDevice')}>
          <ViewCustom layout="h-30 w-30 bg-primary jc-c ai-c" round>
            <Icon color={'#252A31'} size={20} name="plus" />
          </ViewCustom>
        </TouchableOpacity>
      </ViewCustom>

      <ViewCustom layout="p-15 bg-w mx-5" round shadow>
        <TextCustom type="fs-16 fw-bold">Connected Device</TextCustom>

        <ViewCustom layout="mt-4 mb-16">
          <TextCustom type="fw-normal fs-14">
            Nhấn vào một thiết bị để thiết lập điều khiển và cài đặt.
          </TextCustom>

          <ViewCustom layout="mt-15" round>
            <Grid
              data={devices}
              RenderItem={renderItem}
              numColumns={3}
              gapX={15}
            />
          </ViewCustom>
        </ViewCustom>
      </ViewCustom>
    </>
  );
};

export default ConnectDevice;
