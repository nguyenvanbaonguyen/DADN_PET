import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeViewCustom = ({children, blue = false}: any) => {
  const insets = useSafeAreaInsets();

  // Keep status bar and bottom
  const layoutStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    flex: 1,
    backgroundColor: blue ? '#DEF0FC' : '#ffffff',
  };

  return <View style={layoutStyle}>{children}</View>;
};

export default SafeViewCustom;
