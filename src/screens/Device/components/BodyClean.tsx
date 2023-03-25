import React from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import ButtonToggle from '~/components/ButtonCustom/ButtonToggle';

const BodyClean = () => {
  return (
    <ViewCustom layout="bg-w p-15 fd-r jc-b mx-12 my-20" shadow round>
      <ViewCustom layout="ml-6 w-280">
        <ViewCustom layout="mb-15">
          <TextCustom type="fs-16 fw-semi">Auto Cleaning</TextCustom>
        </ViewCustom>
        <TextCustom type="fs-14">
          Chế độ dọn vệ sinh tự động khi thú cưng đi vệ sinh
        </TextCustom>
      </ViewCustom>

      <ViewCustom layout="mt-15" overflow>
        <ButtonToggle />
      </ViewCustom>
    </ViewCustom>
  );
};

export default BodyClean;
