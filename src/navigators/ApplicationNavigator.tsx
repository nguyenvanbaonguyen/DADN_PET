import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Introduce from '~/screens/Introduce/Introduce';
import AuthNav from './AuthNav';
import {navigationRef} from './globalNav';
import MainNav from './MainNav';
import Notification from '~/screens/Notification/Notifications';

const Stack = createNativeStackNavigator();

export default function ApplicationNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Introduce"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Introduce" component={Introduce} />
        <Stack.Screen name="AuthNav" component={AuthNav} />
        <Stack.Screen name="MainNav" component={MainNav} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
