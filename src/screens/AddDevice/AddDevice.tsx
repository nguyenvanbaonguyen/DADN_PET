import React, {useEffect, useRef, useState} from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import SetupCode from './components/SetupCode';
import TabView from '~/components/TabView/TabView';
import QRCode from './components/QRCode';

const TYPES = [
  {id: 0, content: 'Enter Setup Code', Component: SetupCode, data: {}},
  {id: 1, content: 'Scan QR Code', Component: QRCode, data: {}},
];

const AddDevice = () => {
  return (
    <ViewCustom layout="f-1">
      <TabView datasets={TYPES} />
    </ViewCustom>
  );
};

export default AddDevice;
