import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextCustom from '~/components/TextCustom/TextCustom';
import TimeScroll from '~/components/TimeScroll/TimeScroll';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const StartTime = () => {
  return (
    <>
      <TextCustom type="fw-semi fs-16">Start Time</TextCustom>
      <ViewCustom layout="jc-c ai-c mt-15 mb-30">
        <ViewCustom layout="fd-r w-200" style={{position: 'relative'}}>
          <TimeScroll nTimes={24} />
          <TimeScroll nTimes={60} />
        </ViewCustom>
        <LinearGradient
          colors={['#F1F8FA', 'white']}
          style={styles.linearGradient}
        />
        <LinearGradient
          colors={['#F1F8FA', 'white']}
          style={styles.linearGradient2}
        />
      </ViewCustom>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 45,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 0,
  },
  linearGradient2: {
    flex: 1,
    height: 45,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    transform: [{scaleY: -1}],
  },
});

export default StartTime;
