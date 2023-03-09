import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Providers = ({children}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </>
  );
};

export default Providers;
