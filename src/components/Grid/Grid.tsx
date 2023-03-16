import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import createArray from '~/helpers/createArray';

const Grid = ({
  data = [],
  RenderItem,
  numColumns = 1,
  gapX = 0,
  gapY = 0,
}: any) => {
  const length = data.length;
  const numberRows = Math.ceil(length / numColumns);

  const Column = useCallback(
    ({index}: any) => (
      <View style={[styles.col, {marginLeft: index % numColumns && gapX}]}>
        <RenderItem item={data[index]} index={index} />
      </View>
    ),
    [RenderItem, data, gapX, numColumns],
  );

  const Row = useCallback(
    ({indexRow}: any) => (
      <View style={[styles.row, {marginTop: indexRow && gapY}]}>
        {createArray(numColumns).map(indexCol => {
          const index = numColumns * indexRow + indexCol;
          if (length <= index)
            return (
              <View
                style={[styles.col, {marginLeft: index && gapX}]}
                key={index}
              />
            );
          return <Column index={index} key={index} />;
        })}
      </View>
    ),
    [numColumns, Column, length, gapY, gapX],
  );

  return (
    <View style={[styles.container]}>
      {createArray(numberRows).map(indexRow => (
        <Row indexRow={indexRow} key={indexRow} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  container: {
    width: '100%',
  },
});

export default Grid;
