import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import useModal from '~/hooks/useModal';
import {navigate} from '~/navigators/globalNav';

const ImmediateClean = () => {
  const {openModal, Modal} = useModal();
  const route = useRoute();
  return (
    <>
      <ViewCustom layout="mx-5 p-15 fd-r jc-b ai-c">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigate('DeviceSettings', {
              index: route.params.index,
            });
          }}>
          <ViewCustom layout="h-40 w-40 bg-primary jc-c ai-c br-80">
            <Icon color={'#005AA3'} size={25} name="setting" />
          </ViewCustom>
        </TouchableOpacity>

        <Pressable onPress={openModal}>
          <ViewCustom layout="ai-c br-180 bg-cloudl h-120 w-120 p-15">
            <Icon color={'#005AA3'} size={40} name="android" />
            <ViewCustom layout="mt-8">
              <TextCustom type="ai-c cl-blue fw-semi align-c">
                Immediately Clean
              </TextCustom>
            </ViewCustom>
          </ViewCustom>
        </Pressable>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate('DeviceRecord')}>
          <ViewCustom layout="h-40 w-40 bg-primary jc-c ai-c br-80">
            <Icon color={'#005AA3'} size={25} name="reload1" />
          </ViewCustom>
        </TouchableOpacity>
      </ViewCustom>

      <Modal>
        <ViewCustom layout="w-380 p-20">
          <TextCustom type="fs-14 fw-semi">Manual Feed</TextCustom>
          <ViewCustom layout="mt-5">
            <TextCustom type="fs-13 lh-20">
              Tự động dọn vệ sinh ngay lập tức
            </TextCustom>
          </ViewCustom>

          <ViewCustom layout="fd-r mt-15">
            <ButtonCustom size="xs" content="Save" full />
            <ButtonCustom
              size="xs"
              content="Cancel"
              outline
              full
              layout="ml-10"
            />
          </ViewCustom>
        </ViewCustom>
      </Modal>
    </>
  );
};
export default ImmediateClean;
