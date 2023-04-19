import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import { devices } from './dataDevices';

const RenderItem = ({item}) => {
  return (
    <ViewCustom layout="p-15 mx-12">
      <ViewCustom layout="fd-r">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Device Name</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.name}</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Device ID</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.id}</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Status</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.status}</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Version</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.version}</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Information</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.info}</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Manufacturer</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.manufacturer}</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Privacy Policy</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">{item.policy}</TextCustom>
      </ViewCustom>
    </ViewCustom>
  );
};

const DeviceSettings = () => {
  const route = useRoute();
  const index = route.params.index - 1;
  return (
    <>
      <ViewCustom layout="p-5 mt-15">
        <Grid
          data={devices.slice(index, index + 1)}
          RenderItem={RenderItem}
          numColumns={1}
          gapX={0}
          gapY={0}
        />
      </ViewCustom>
    </>
  );
};

export default DeviceSettings;
