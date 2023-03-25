import {presets} from 'babel.config';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const TextInputCustom = ({name, content, setUser, user, readOnly}: any) => {
  return (
    <ViewCustom layout="mt-15">
      <TextCustom type="fs-16 ">{content}</TextCustom>
      <TextInput
        style={styles.inputStyle}
        value={user[name]}
        onChangeText={text => setUser(pre => ({...pre, [name]: text}))}
        readOnly={readOnly}
      />
    </ViewCustom>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    padding: 12,
    backgroundColor: '#F5F7F9',
    color: 'black',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#BAC7D5',
    borderRadius: 6,
  },
});

export default TextInputCustom;