import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddDevice from '~/screens/AddDevice/AddDevice';
import Device from '~/screens/Device/Device';
import DeviceRecord from '~/screens/DeviceRecord/DeviceRecord';
import DeviceSettings from '~/screens/DeviceSettings/DeviceSettings';
// import FeedTimer from '~/screens/FeedTimer/FeedTimer';
import HistoryUser from '~/screens/HistoryUser/HistoryUser';
import Home from '~/screens/Home/Home';
import Pet from '~/screens/Pet/Pet';
import Stat from '~/screens/Stat/Stat';
import PetInfo from '~/screens/PetInfo/PetInfo';
import AddPet from '~/screens/AddPet/AddPet';

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
      <Stack.Screen name="Pet" component={Pet} />
      <Stack.Screen name="PetInfo" component={PetInfo} />
      <Stack.Screen name="AddPet" component={AddPet} />
      <Stack.Screen name="AddDevice" component={AddDevice} />
      <Stack.Screen name="Device" component={Device} />
      <Stack.Screen name="DeviceRecord" component={DeviceRecord} />
      <Stack.Screen name="DeviceSettings" component={DeviceSettings} />
      {/* <Stack.Screen name="FeedTimer" component={FeedTimer} /> */}
      <Stack.Screen name="PetRecord" component={HistoryUser} />
      <Stack.Screen
        name="Stat"
        component={Stat}
        options={{title: 'Thống kê'}}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
