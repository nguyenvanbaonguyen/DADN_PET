import React from 'react';
import {ScrollView, View} from 'react-native';
import Immediate from './components/Immediate';
import Body from './components/Body';

const Device = ({navigation}) => {
  // const {presentBts, BottomSheet: Sheet} = useBts(BottomSheet);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Immediate />
        <Body />
      </ScrollView>
    </View>
  );
};

export default Device;
