import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {View} from 'react-native';

const Loading = () => {
  return (
    <View style={style.loadingWrapper}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

const style = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default Loading;
