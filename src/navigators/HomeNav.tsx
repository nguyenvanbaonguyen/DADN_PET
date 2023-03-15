import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddDevice from '~/screens/AddDevice/AddDevice';
import Device from '~/screens/Device/Device';
import DeviceRecord from '~/screens/DeviceRecord/DeviceRecord';
import DeviceSettings from '~/screens/DeviceSettings/DeviceSettings';
import FeedTimer from '~/screens/FeedTimer/FeedTimer';
import Home from '~/screens/Home/Home';
import Stat from '~/screens/Stat/Stat';

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
      <Stack.Screen
        name="Stat"
        component={Stat}
        options={{title: 'Thống kê'}}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
