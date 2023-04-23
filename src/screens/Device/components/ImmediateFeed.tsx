import {useRoute} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import useModal from '~/hooks/useModal';
import {navigate} from '~/navigators/globalNav';
import FeedPortion from './FeedPortion';

const ImmediateFeed = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {Modal, openModal, closeModal} = useModal();
  // const index = route?.params?.index;

  // const dispatch = useDispatch();
  // const onSubmit = async (data) => {
  //   const sendFood = async () => {
  //     const {portions} = data;
  //     console.log('values ', data);
  //     await dispatch(sendFood(index, {portions}));

  //     console.log('Tom n Jerry');
  //     closeModal();
  //   };
  //   try {
  //     await sendFood();
  //   } catch (error) {
  //     console.log('error send food ', error);
  //   }
  // };

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
            <Icon color={'#005AA3'} size={40} name="home" />
            <ViewCustom layout="mt-8">
              <TextCustom type="ai-c cl-blue fw-semi align-c">
                Immediately Feed
              </TextCustom>
            </ViewCustom>
          </ViewCustom>
        </Pressable>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigate('DeviceRecord', {
              index: route.params.index,
            })
          }>
          <ViewCustom layout="h-40 w-40 bg-primary jc-c ai-c br-80">
            <Icon color={'#005AA3'} size={25} name="reload1" />
          </ViewCustom>
        </TouchableOpacity>
      </ViewCustom>

      <Modal layout="">
        <ViewCustom layout="w-380 p-20">
          <TextCustom type="fs-14 fw-semi">Manual Feed</TextCustom>
          <ViewCustom layout="mt-5">
            <TextCustom type="fs-13 lh-20">
              Chọn khẩu phần ăn cho thú cưng
            </TextCustom>
          </ViewCustom>

          <FeedPortion closeModal={closeModal} />
        </ViewCustom>
      </Modal>
    </>
  );
};
export default ImmediateFeed;
