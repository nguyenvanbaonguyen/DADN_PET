import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import React from 'react';

const BackDrop = props => {
  return (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
  );
};

export default BackDrop;
