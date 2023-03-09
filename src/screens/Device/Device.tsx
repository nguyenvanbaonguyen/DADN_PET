import React from 'react';
import {Button, Text, View} from 'react-native';
import {navigate} from '~/navigators/globalNav';

const Device = () => {
  return (
    <View>
      <Button onPress={() => navigate('DeviceSettings')} title="Settings" />
      <Button onPress={() => navigate('DeviceRecord')} title="Record" />
    </View>
  );
};

export default Device;
