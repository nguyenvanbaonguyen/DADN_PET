import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import Pagination from '~/components/Pagination/Pagination';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import HistoryDay from './components/HistoryDay';

const HistoryUser = () => {
  return (
    <ScrollView>
      <ViewCustom layout="px-15 mt-15 pb-30">
        <ViewCustom layout="fd-r jc-b">
          <TextCustom type="fs-20 fw-semi">Lịch sử hoạt động</TextCustom>
          <ViewCustom layout="h-30 w-30 jc-c ai-c">
            <Icon color={'black'} size={25} name="filter" />
          </ViewCustom>
        </ViewCustom>
        <HistoryDay />
        <HistoryDay />
        <HistoryDay />
        <HistoryDay />
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

export default HistoryUser;
