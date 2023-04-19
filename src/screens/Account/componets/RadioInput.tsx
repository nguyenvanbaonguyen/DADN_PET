import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';

const data = ['Nam', 'Nữ', 'Khác'];

const RadioInput = ({name, user, setUser}) => {
  return (
    <ViewCustom layout="mt-15">
      <TextCustom type="fs-16">Giới tính</TextCustom>
      <ViewCustom layout="mt-10 fd-r">
        {data.map(item => {
          let styleChoose: any = styles.circleStyle;
          const gender = user.gender;
          if (!(gender === item))
            styleChoose = {...styleChoose, backgroundColor: 'white'};

          return (
            <Pressable
              onPress={() => setUser(pre => ({...pre, [name]: item}))}
              key={item}>
              <ViewCustom layout="fd-r mr-30" key={item}>
                <ViewCustom
                  layout="w-20 h-20 br-20 bg-blue ai-c jc-c mr-10"
                  style={styleChoose}>
                  <ViewCustom layout="w-8 h-8 br-20 bg-w ai-c jc-c" />
                </ViewCustom>
                <TextCustom type="fs-16">{item}</TextCustom>
              </ViewCustom>
            </Pressable>
          );
        })}
      </ViewCustom>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    borderWidth: 1,
    borderColor: '#566976',
  },
});

export default RadioInput;
