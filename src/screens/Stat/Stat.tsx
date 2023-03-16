import React from 'react';
import {ScrollView} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import ButtonMulti from '~/components/ButtonCustom/ButtonMulti';
import Chart from '~/components/Chart/Chart';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import General from './General';

const Stat = () => {
  return (
    <ScrollView>
      <ViewCustom layout="px-15 py-30">
        <General />

        <ViewCustom layout="p-15 mt-15 bg-w br-6" shadow>
          <TextCustom type="fs-18 fw-bold">Cleaning Report</TextCustom>
          <ViewCustom layout="mt-15">
            <ButtonMulti />
            <ViewCustom layout="mt-15" style={{marginLeft: -15}}>
              <Chart />
            </ViewCustom>

            <ViewCustom>
              <TextCustom type="fs-13 lh-20">
                Trung bình đi vệ sinh 2 lần 1 ngày. Top 2 khung giờ đi vệ sinh
                nhiều nhất là 06:00 - 07:00AM và 19:00 - 20:30PM.
              </TextCustom>
              <ViewCustom layout="mt-10">
                <TextCustom type="fs-13">
                  Tình trạng vệ sinh: không có gì bất thường.
                </TextCustom>
              </ViewCustom>
            </ViewCustom>

            <ViewCustom layout="mt-15 ai-e">
              <ButtonCustom size="x" content="Export" outline />
            </ViewCustom>
          </ViewCustom>
        </ViewCustom>

        <ViewCustom layout="p-15 mt-15 bg-w br-6" shadow>
          <TextCustom type="fs-18 fw-bold">Feeding Report</TextCustom>
          <ViewCustom layout="mt-15">
            <ButtonMulti />
            <ViewCustom layout="mt-15" style={{marginLeft: -15}}>
              <Chart />
            </ViewCustom>

            <ViewCustom>
              <TextCustom type="fs-13 lh-20">
                Trung bình đi cho ăn 2 lần 1 ngày. Top 2 khung giờ cho ăn nhiều
                nhất là 06:00 - 07:00AM và 19:00 - 20:30PM.
              </TextCustom>
              <ViewCustom layout="mt-10">
                <TextCustom type="fs-13">
                  Tình trạng ăn uống: không có gì bất thường.
                </TextCustom>
              </ViewCustom>
            </ViewCustom>

            <ViewCustom layout="mt-15 ai-e">
              <ButtonCustom size="x" content="Export" outline />
            </ViewCustom>
          </ViewCustom>
        </ViewCustom>
      </ViewCustom>
    </ScrollView>
  );
};

export default Stat;
