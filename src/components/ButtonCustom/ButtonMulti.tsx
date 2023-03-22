import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonMini = ({content, index, lengthData, active, onPress}: any) => {
  let style: any = index === lengthData - 1 ? styles.buttonEnd : {};
  if (active) style = {...style, backgroundColor: '#008FF833'};

  const handlePress = () => {
    onPress(index);
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.7}
      onPress={handlePress}>
      <Text style={styles.textInactive}>{content}</Text>
    </TouchableOpacity>
  );
};

const ButtonMulti = ({data}) => {
  const [id, setId] = useState(0);
  const length = data.length;

  return (
    <View style={styles.wrapper}>
      {data.map((content, index) => (
        <ButtonMini
          content={content}
          index={index}
          key={index}
          lengthData={length}
          active={id === index}
          onPress={setId}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    width: 'auto',
    alignSelf: 'flex-start',
    overflow: 'hidden',
    borderColor: '##008FF8',
  },
  button: {
    width: 60,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '##008FF8',
  },
  buttonEnd: {
    borderRightWidth: 0,
  },
  buttonBlue: {
    backgroundColor: '#008FF833',
  },
  textInactive: {
    color: 'black',
  },
});

export default ButtonMulti;
