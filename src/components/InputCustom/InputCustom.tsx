import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';

const InputCustom = ({placeHolder, ...props}: any) => {
  return (
    <>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeHolder}
        placeholderTextColor="#D3D3D3"
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#181B20',
    fontSize: 18,
    color: 'black',
  },
});

export default InputCustom;
