import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {getDevice} from '~/redux/device/device';
// import {devices} from './dataDevices';

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
        <TextCustom type="fs-16">{item._id.substring(0, 7)}</TextCustom>
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
        <TextCustom type="fs-16">1.1.1</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Information</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">good</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Manufacturer</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">PetCare</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-20">
        <ViewCustom layout="w-150">
          <TextCustom type="fs-16 fw-semi">Privacy Policy</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-16">
          Use data only to build better services
        </TextCustom>
      </ViewCustom>
    </ViewCustom>
  );
};

const DeviceSettings = () => {
  const route = useRoute();
  const index = route.params.index;
  const dispatch = useDispatch();
  const [device, setDevice] = useState([]);
  useEffect(() => {
    const callDevice = async id => {
      try {
        const res = await dispatch(getDevice(id));
        console.log('deviceinfo ', res?.data?.data);
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
    <>
      <ViewCustom layout="p-5 mt-15">
        <Grid
          data={[device]}
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
