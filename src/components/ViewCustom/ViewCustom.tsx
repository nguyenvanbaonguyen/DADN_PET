import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import stView from '~/helpers/stView';

const ViewCustom = ({
  children,
  layout,
  round,
  style,
  shadow,
  ...props
}: any) => {
  // Todo:
  let layoutStyle = stView(layout);
  let shadowStyle;

  // Add border radius
  if (round) layoutStyle.borderRadius = 6;

  if (shadow)
    shadowStyle =
      Platform.OS === 'ios' ? styles.shadowIos : styles.shadowAndroid;

  // UI
  return (
    <View style={[layoutStyle, style, shadowStyle]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowIos: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  shadowAndroid: {
    elevation: 2,
    shadowColor: '#171717',
  },
});

export default ViewCustom;
