import React from 'react';
import {ScrollView} from 'react-native';
import Pagination from '~/components/Pagination/Pagination';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import HistoryDay from './components/HistoryDay';

const HistoryUser = () => {
  return (
    <ScrollView>
      <ViewCustom layout="px-15 mt-15 pb-30">
        <TextCustom type="fs-20 fw-semi">Lịch sử hoạt động</TextCustom>
        <HistoryDay />
        <HistoryDay />
        <HistoryDay />
        <HistoryDay />
        <ViewCustom layout="ai-e mt-10">
          <Pagination />
        </ViewCustom>
      </ViewCustom>
    </ScrollView>
  );
};

export default HistoryUser;
