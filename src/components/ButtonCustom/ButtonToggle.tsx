import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Animated} from 'react-native';
import {View} from 'react-native';

const BIG_BALL_RADIUS = 26;
const SMALL_BALL_RADIUS = 10;
const BAR_WIDTH = 45;
const BAR_HEIGHT = 24;
const BAR_RADIUS = 30;

const ButtonToggle = ({onPress = async () => {}, active = true}) => {
  const wSub = useRef(new Animated.Value(active ? 45 : 0)).current;
  const [isActive, setIsActive] = useState(active);
  const translateX = wSub.interpolate({
    inputRange: [0, 45],
    outputRange: [0, 39],
  });

  const hanlePress = async () => {
    await onPress();
    Animated.timing(wSub, {
      toValue: isActive ? 0 : 45,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsActive(pre => !pre);
  };

  return (
    <Pressable style={styles.container} onPress={hanlePress}>
      <Animated.View style={[styles.containerSub, {width: wSub}]} />
      <Animated.View
        style={[styles.buttonBig, {transform: [{translateX: translateX}]}]}>
        <View
          style={[
            styles.buttonSmall,
            {backgroundColor: isActive ? '#0172CB' : '#BAC7D5'},
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    backgroundColor: '#BAC7D5',
    borderRadius: BAR_RADIUS,
  },
  containerSub: {
    height: BAR_HEIGHT,
    backgroundColor: '#0172CB',
    borderRadius: BAR_RADIUS,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  buttonBig: {
    height: BIG_BALL_RADIUS,
    width: BIG_BALL_RADIUS,
    borderRadius: BIG_BALL_RADIUS,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: (BAR_HEIGHT - BIG_BALL_RADIUS) / 2,
    left: (SMALL_BALL_RADIUS - BIG_BALL_RADIUS) / 2,
    borderColor: 'rgba(7, 64, 92, 0.1)',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSmall: {
    width: SMALL_BALL_RADIUS,
    height: SMALL_BALL_RADIUS,
    borderRadius: SMALL_BALL_RADIUS,
    backgroundColor: '#BAC7D5',
  },
});

export default ButtonToggle;
