import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import stView from '~/helpers/stView';
import Appear from '../Appear/Appear';
import ButtonCustomProps, {textType} from './Button';
import buttonStyles from './defineStyles';

const ButtonCustom = ({
  size,
  content,
  layout,
  outline,
  danger,
  full,
  onPress,
  iconLeft,
  iconRight,
}: ButtonCustomProps) => {
  const textSize: textType = `text${size}`;
  // Set style for button and text
  let buttonStyle = buttonStyles[size];
  let textStyle = buttonStyles[textSize];
  // Set style for layout
  let layoutStyle = stView(layout);

  // Set margin for icon
  const marginValue = size === 'xss' ? 10 : 5;

  // Config additional about UI
  if (outline) {
    buttonStyle = {...buttonStyle, ...styles.outline};
    textStyle = {...textStyle, ...styles.textOutline};
  }
  if (full) layoutStyle = {...layoutStyle, flex: 1};
  if (danger) layoutStyle = {...layoutStyle, backgroundColor: '#D7331C'};

  return (
    <TouchableOpacity
      style={[styles.base, buttonStyle, layoutStyle]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Appear condition={iconLeft}>
        <Icon
          name={iconLeft || 'left'}
          color={'white'}
          size={20}
          style={{marginRight: marginValue}}
        />
      </Appear>

      <Text style={[styles.textbase, textStyle]}>{content}</Text>

      <Appear condition={iconRight}>
        <Icon
          name={iconRight || 'right'}
          color={'white'}
          size={20}
          style={{marginLeft: marginValue}}
        />
      </Appear>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0172CB',
    borderRadius: 6,
  },
  textbase: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  outline: {
    backgroundColor: '#F1F8FE',
    borderWidth: 1,
    borderColor: '#005AA3',
  },
  textOutline: {
    color: '#0172CB',
  },
});

export default ButtonCustom;
