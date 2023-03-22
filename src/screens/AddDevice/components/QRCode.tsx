import React from 'react';
import {Image} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const QRCode = () => {
  return (
    <ViewCustom layout="px-15 my-12 pb-2">
      <ViewCustom layout="p-15 bg-w" round shadow>
        <TextCustom type="fs-16 fw-bold">Setup Code</TextCustom>

        <ViewCustom layout="mt-4 mb-16">
          <TextCustom type="fw-normal fs-13">
            Nhập mã gồm 11 hoặc 21 ký tự trên thiết bị của bạn.
          </TextCustom>

          <ViewCustom layout="my-15 jc-c ai-c">
            <ImageCustom name="qrCode" height={200} width={156} />
          </ViewCustom>

          <ViewCustom layout="ai-c">
            <ButtonCustom size="xs" content="Scan" layout="mt-15" />
          </ViewCustom>
        </ViewCustom>
      </ViewCustom>
    </ViewCustom>
  );
};

export default QRCode;
