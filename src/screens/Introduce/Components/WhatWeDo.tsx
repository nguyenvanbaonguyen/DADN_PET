import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import TextCustom from '~/components/TextCustom/TextCustom';
import {STUDIES} from './data';

const WhatWeDo = () => {
  return (
    <View style={{marginTop: 30}}>
      {STUDIES.map(item => (
        <View key={item.index.toString()} style={styles.subContainer}>
          <TextCustom type="fs-14 fw-semi">{item.mainContent}</TextCustom>
          <TextCustom type="cl-gray fs-14">{item.subContent}</TextCustom>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 70,
    justifyContent: 'center',
    paddingLeft: 30,
    marginBottom: 30,
  },
  mainText: {
    fontSize: 14,
    fontWeight: '500',
  },
  subText: {
    color: '#4F5E71',
    fontSize: 12,
  },
});

export default WhatWeDo;
