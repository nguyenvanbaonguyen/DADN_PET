import React, {useCallback, useRef} from 'react';

const useBts = BottomSheetDisplay => {
  const sheetRef = useRef(null);

  const presentBts = useCallback(() => {
    sheetRef.current?.present();
  }, [sheetRef]);

  const closeBts = useCallback(() => {
    sheetRef.current?.close();
  }, [sheetRef]);

  const allFuncs = {presentBts, closeBts};

  const BottomSheetHoc = BottomSheetDisplay => props =>
    <BottomSheetDisplay sheetRef={sheetRef} {...allFuncs} {...props} />;

  return {
    ...allFuncs,
    BottomSheet: BottomSheetHoc(BottomSheetDisplay),
  };
};

export default useBts;
