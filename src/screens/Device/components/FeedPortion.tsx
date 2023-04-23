import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {sendFood} from '~/redux/device/device';

const FeedPortion = ({closeModal}) => {
  const [value, setValue] = useState(1);

  const route = useRoute();
  const index = route?.params?.index;

  const dispatch = useDispatch();
  const onSubmit = async () => {
    const callSendFood = async () => {
      const amount = value;
      console.log('amount ', value);
      await dispatch(sendFood(index, {amount}));

      console.log('Tom n Jerry');
      closeModal();
    };
    try {
      await callSendFood();
    } catch (error) {
      console.log('error send food ', error);
    }
  };

  return (
    <>
      <ViewCustom layout="fd-r ai-c mt-15">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setValue(Math.max(value - 1, 1))}>
          <ViewCustom
            layout="p-1 bg-cloudl w-26 h-26 jc-c ai-c mr-15"
            style={{borderRadius: 26}}>
            <Icon name="minus" size={18} color={'black'} />
          </ViewCustom>
        </TouchableOpacity>

        <TextCustom type="fs-16">{value}</TextCustom>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setValue(value + 1)}>
          <ViewCustom
            layout="p-1 bg-cloudl w-26 h-26 jc-c ai-c mx-15"
            style={{borderRadius: 26}}>
            <Icon name="plus" size={18} color={'black'} />
          </ViewCustom>
        </TouchableOpacity>

        <TextCustom type="fs-16">portions (s)</TextCustom>
      </ViewCustom>

      <ViewCustom layout="fd-r mt-15">
        <ButtonCustom size="xs" content="Save" full onPress={onSubmit} />
        <ButtonCustom
          size="xs"
          content="Cancel"
          outline
          full
          layout="ml-10"
          onPress={closeModal}
        />
      </ViewCustom>
    </>
  );
};

export default FeedPortion;
