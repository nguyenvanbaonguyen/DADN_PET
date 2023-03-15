import React from 'react';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';
import Grid from '~/components/Grid/Grid';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {devicesSmall} from '../dataInHome';

const RenderItem = ({item}) => {
  return (
    <ViewCustom layout="bg-w p-15" shadow round>
      <ViewCustom layout="fd-r ai-c">
        <ImageCustom height={40} width={40} name="petCleanerSmall" />
        <ViewCustom layout="ml-6">
          <TextCustom type="fs-15 fw-semi">Cleaner C1</TextCustom>
        </ViewCustom>
      </ViewCustom>

      <ViewCustom layout="mt-15 fd-r jc-b ai-c" overflow>
        <TextCustom type="fs-16">On</TextCustom>
        <ButtonToggle />
      </ViewCustom>
    </ViewCustom>
  );
};

const MonitorDevice = () => {
  return (
    <>
      <ViewCustom layout="mt-15">
        <TextCustom type="fs-20 fw-bold">Monitoring!</TextCustom>
        <TextCustom type="fs-13 lh-20">
          Điều khuyển nhanh chế độ tự động
        </TextCustom>
      </ViewCustom>

      <ViewCustom layout="p-5 mt-15">
        <Grid
          data={devicesSmall}
          RenderItem={RenderItem}
          numColumns={2}
          gapX={20}
          gapY={20}
        />
      </ViewCustom>
    </>
  );
};

export default MonitorDevice;
