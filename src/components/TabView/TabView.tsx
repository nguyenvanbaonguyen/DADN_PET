import React, {useRef, useState} from 'react';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import PressCustom from '~/components/PressCustom/PressCustom';
import {Dimensions, ScrollView} from 'react-native';

const {width} = Dimensions.get('window');

const TabView = ({datasets}) => {
  const [value, setValue] = useState(0);
  const flatlistRef = useRef<any>(null);
  const hanlePress = value => {
    if (!flatlistRef?.current) return;
    flatlistRef?.current?.scrollTo({x: value * width, animated: true});
  };
  return (
    <ViewCustom layout="f-1">
      <ViewCustom layout="fd-r p-2 bg-cloudl mt-15 h-44 mx-15" round>
        {datasets.map(item => (
          <PressCustom
            layout="f-1 ai-c jc-c"
            key={item.id}
            round
            arrLayout={[[value === item.id, 'bg-w']]}
            onPress={() => hanlePress(item.id)}>
            <TextCustom type="fs-14 fw-semi">{item.content}</TextCustom>
          </PressCustom>
        ))}
      </ViewCustom>
      <ViewCustom>
        <ScrollView
          horizontal={true}
          snapToInterval={width}
          decelerationRate="fast"
          onScroll={({nativeEvent}) => {
            const scrollX = nativeEvent.contentOffset.x;
            setValue(Math.round(scrollX / width));
          }}
          ref={flatlistRef}
          bounces={false}>
          {datasets.map((item: any) => {
            const Component = item.Component;
            return <Component {...item.data} key={item.id} />;
          })}
        </ScrollView>
      </ViewCustom>
    </ViewCustom>
  );
};

export default TabView;
