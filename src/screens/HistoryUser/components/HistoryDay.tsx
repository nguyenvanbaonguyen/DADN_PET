import React from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import HistoryOnetime from './HistoryOnetime';

const HistoryDay = () => {
  return (
    <ViewCustom layout="mt-20">
      <TextCustom type="fs-18 fw-semi">Wed - Mar 1, 2023</TextCustom>
      <HistoryOnetime />
      <HistoryOnetime />
    </ViewCustom>
  );
};

export default HistoryDay;
