import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddDevice from '~/screens/AddDevice/AddDevice';
import Device from '~/screens/Device/Device';
import DeviceRecord from '~/screens/DeviceRecord/DeviceRecord';
import DeviceSettings from '~/screens/DeviceSettings/DeviceSettings';
import Home from '~/screens/Home/Home';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddDevice" component={AddDevice} />
      <Stack.Screen name="Device" component={Device} />
      <Stack.Screen name="DeviceRecord" component={DeviceRecord} />
      <Stack.Screen name="DeviceSettings" component={DeviceSettings} />
    </Stack.Navigator>
  );
};

export default HomeNav;
