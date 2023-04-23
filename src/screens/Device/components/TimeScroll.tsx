import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {createArrayPro} from '~/helpers/createArray';
import TextCustom from '../../../components/TextCustom/TextCustom';
import ViewCustom from '../../../components/ViewCustom/ViewCustom';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from './DatePicker';

const TimeScroll = ({nHour, nMin, closeModal}: any) => {
  const hour = useMemo(() => {
    return createArrayPro(nHour + 2, -1);
  }, [nHour]);
  const min = useMemo(() => {
    return createArrayPro(nMin + 2, -1);
  }, [nMin]);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const renderItem1 = ({item}) => {
    let itemDisplay = item.toString();
    if (itemDisplay === '-1') itemDisplay = (nHour - 1).toString();
    if (itemDisplay === nHour.toString()) itemDisplay = '0';
    if (itemDisplay.length < 2) itemDisplay = '0' + itemDisplay.toString();

    return (
      <ViewCustom layout="h-30 jc-c ai-c w-full">
        <TextCustom
          type="fs-16"
          style={item === value1 ? styles.timeStyle : undefined}>
          {itemDisplay}
        </TextCustom>
      </ViewCustom>
    );
  };

  const renderItem2 = ({item}) => {
    let itemDisplay = item.toString();
    if (itemDisplay === '-1') itemDisplay = (nHour - 1).toString();
    if (itemDisplay === nHour.toString()) itemDisplay = '0';
    if (itemDisplay.length < 2) itemDisplay = '0' + itemDisplay.toString();

    return (
      <ViewCustom layout="h-30 jc-c ai-c w-full">
        <TextCustom
          type="fs-16"
          style={item === value2 ? styles.timeStyle : undefined}>
          {itemDisplay}
        </TextCustom>
      </ViewCustom>
    );
  };

  return (
    <>
      <ViewCustom layout="jc-c ai-c mt-15 mb-30">
        <ViewCustom layout="fd-r w-200" style={{position: 'relative'}}>
          <FlatList
            data={hour}
            renderItem={renderItem1}
            keyExtractor={item => item.toString()}
            style={styles.flatlistStyle}
            snapToInterval={30}
            onScroll={({nativeEvent}) => {
              setValue1(Math.round(nativeEvent.contentOffset.y / 30));
            }}
            showsVerticalScrollIndicator={false}
          />

          <FlatList
            data={min}
            renderItem={renderItem2}
            keyExtractor={item => item.toString()}
            style={styles.flatlistStyle}
            snapToInterval={30}
            onScroll={({nativeEvent}) => {
              setValue2(Math.round(nativeEvent.contentOffset.y / 30));
            }}
            showsVerticalScrollIndicator={false}
          />
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

      <DatePicker hour={value1} min={value2} closeModal={closeModal} />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    paddingVertical: 10,
    borderWidth: 2,
    marginTop: 15,
    paddingLeft: 10,
  },
  flatlistStyle: {
    height: 90,
    overflow: 'hidden',
    width: 60,
  },
  timeStyle: {
    color: 'red',
    transform: [{scale: 1.2}],
  },
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

export default TimeScroll;
