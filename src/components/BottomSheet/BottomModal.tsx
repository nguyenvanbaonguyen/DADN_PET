import React, {useMemo} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import BackDrop from './BackDrop';

const BottomSheet = ({sheetRef, closeBts, children}: any) => {
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={BackDrop}>
      {children}
    </BottomSheetModal>
  );
};

export default BottomSheet;
