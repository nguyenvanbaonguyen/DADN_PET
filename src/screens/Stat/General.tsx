import React from 'react';
import {Text} from 'react-native';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const data = [
  {name: 'Last week', portions: '74.2', poop: 5},
  {name: 'This week', portions: '74.2', poop: 5},
];

const renderItem = ({item}) => (
  <ViewCustom layout="p-15 w-full bg-w br-6" shadow overflow>
    <TextCustom type="fs-14 cl-gray">{item.name}</TextCustom>
    <ViewCustom layout="mt-7 fd-r jc-b ai-c">
      <ViewCustom layout="ml-1 fd-r ai-c">
        <ViewCustom layout="w-7 h-7 bg-blue br-7 mr-5" />
        <TextCustom type="fs-14">Portions</TextCustom>
      </ViewCustom>
      <TextCustom type="fs-14 fw-semi">{item.portions}</TextCustom>
    </ViewCustom>

    <ViewCustom layout="mt-7 fd-r jc-b ai-c">
      <ViewCustom layout="ml-1 fd-r ai-c">
        <ViewCustom layout="w-7 h-7 bg-blue br-7 mr-5" />
        <TextCustom type="fs-14">Poop</TextCustom>
      </ViewCustom>
      <TextCustom type="fs-14 fw-semi">{item.poop}</TextCustom>
    </ViewCustom>
  </ViewCustom>
);

const General = () => {
  return <Grid data={data} RenderItem={renderItem} numColumns={2} gapX={20} />;
};

export default General;
