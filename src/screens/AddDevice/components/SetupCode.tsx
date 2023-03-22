import React from 'react';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import InputField from '~/components/InputField/InputField';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const SetupCode = ({}) => {
  return (
    <ViewCustom layout="my-12 px-15">
      <ViewCustom layout="p-15 bg-w" round shadow>
        <TextCustom type="fs-16 fw-bold">Setup Code</TextCustom>

        <ViewCustom layout="mt-4 mb-16">
          <TextCustom type="fw-normal fs-13">
            Nhập mã gồm 11 hoặc 21 ký tự trên thiết bị của bạn.
          </TextCustom>

          <InputField placeHolder="Enter your setup code" />

          <ViewCustom layout="ai-c">
            <ButtonCustom size="xs" content="Kích hoạt" layout="mt-15" />
          </ViewCustom>
        </ViewCustom>
      </ViewCustom>
    </ViewCustom>
  );
};

export default SetupCode;
