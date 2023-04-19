import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import stText from '~/helpers/stText';

const TextCustom = ({type, children, style, underline, ...props}: any) => {
  // Place handle logic
  const textStyle = stText(type);
  // Dont handle logic here
  if (underline) textStyle.textDecorationLine = 'underline';

  return (
    <Text style={[styles.text, textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default TextCustom;
