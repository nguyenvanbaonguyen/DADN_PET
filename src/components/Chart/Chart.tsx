import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Chart = () => {
  return (
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width * 0.9} // from react-native
      height={220}
      // yAxisLabel="$"
      // yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `red`,
        labelColor: (opacity = 1) => `black`,
        style: {
          borderRadius: 16,
        },
      }}
      withOuterLines={false}
      withVerticalLines={false}
      withDots={false}
      withInnerLines={true}
      bezier
    />
  );
};

export default Chart;
