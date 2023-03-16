import React from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import {NavigatorProps} from '~/navigators/navigator';
import InputField from '~/components/InputField/InputField';

const AddDevice = ({navigation}) => {
  return (
    <ViewCustom layout="f-1 px-15 my-12">
      <ViewCustom layout="p-15 bg-w mx-5" round shadow>
        <TextCustom type="fs-16 fw-bold">Setup Code</TextCustom>

        <ViewCustom layout="mt-4 mb-16">
          <TextCustom type="fw-normal fs-14">
            Nhập mã gồm 11 hoặc 21 ký tự trên thiết bị của bạn.
          </TextCustom>

          <InputField placeHolder="Enter your setup code" />

          <ViewCustom layout="ai-c">
            <ButtonCustom
              size="xs"
              content="Kích hoạt"
              layout="mt-15"
              onPress={() => navigation.navigate('Home')}
            />
          </ViewCustom>
        </ViewCustom>
      </ViewCustom>
    </ViewCustom>
  );
};

export default AddDevice;
