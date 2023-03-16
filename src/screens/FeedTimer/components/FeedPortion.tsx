import React, {useState} from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

const FeedPortion = () => {
  const [value, setValue] = useState(1);
  return (
    <ViewCustom layout="mt-30">
      <TextCustom type="fw-semi fs-16">Feed</TextCustom>
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
    </ViewCustom>
  );
};

export default FeedPortion;
