import React from 'react';
import {Touchable, TouchableOpacity} from 'react-native';
import ViewCustom from '../ViewCustom/ViewCustom';

const PressCustom = ({onPress, ...props}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{flex: 1}}>
      <ViewCustom {...props} />
    </TouchableOpacity>
  );
};

export default PressCustom;
