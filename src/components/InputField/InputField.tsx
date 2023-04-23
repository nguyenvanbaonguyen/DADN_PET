import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';

const InputField = ({placeHolder, ...props}: any) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={placeHolder}
      placeholderTextColor="#697D95"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 20,
    marginBottom: 20,
    padding: 12,
    color: '#252A31',
    backgroundColor: '#E8EDF1',
    borderRadius: 6,
    fontSize: 14,
  },
});

export default InputField;
