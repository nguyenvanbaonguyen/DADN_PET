import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const Providers = ({children}) => {
  return (
    <BottomSheetModalProvider>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </BottomSheetModalProvider>
  );
};

export default gestureHandlerRootHOC(Providers);
