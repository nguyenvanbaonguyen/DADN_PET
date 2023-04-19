import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {createArrayPro} from '~/helpers/createArray';
import TextCustom from '../TextCustom/TextCustom';
import ViewCustom from '../ViewCustom/ViewCustom';

const TimeScroll = ({nTimes}: any) => {
  const data = useMemo(() => {
    return createArrayPro(nTimes + 2, -1);
  }, [nTimes]);
  const [value, setValue] = useState(0);

  const renderItem = ({item}) => {
    let itemDisplay = item.toString();
    if (itemDisplay === '-1') itemDisplay = (nTimes - 1).toString();
    if (itemDisplay === nTimes.toString()) itemDisplay = '0';
    if (itemDisplay.length < 2) itemDisplay = '0' + itemDisplay.toString();

    return (
      <ViewCustom layout="h-30 jc-c ai-c w-full">
        <TextCustom
          type="fs-16"
          style={item === value ? styles.timeStyle : undefined}>
          {itemDisplay}
        </TextCustom>
      </ViewCustom>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.toString()}
      style={styles.flatlistStyle}
      snapToInterval={30}
      onScroll={({nativeEvent}) => {
        setValue(Math.round(nativeEvent.contentOffset.y / 30));
      }}
      showsVerticalScrollIndicator={false}
    />
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
});

export default TimeScroll;
