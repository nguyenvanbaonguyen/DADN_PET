import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';

const InputCustom = ({placeHolder}: any) => {
  return <TextInput style={styles.inputStyle} placeholder={placeHolder} />;
};

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 30,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#181B20',
    fontSize: 18,
  },
});

export default InputCustom;
