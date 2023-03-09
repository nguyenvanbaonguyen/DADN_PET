import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import ResetPassword from '../screens/ResetPassword/ResetPassword';

const Stack = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Stack.Navigator
      initialRouteName="Introduce"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}
