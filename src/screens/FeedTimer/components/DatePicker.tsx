import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarCustom from '~/components/Calendar/CalendarCustom';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import useModal from '~/hooks/useModal';

const dataRaw = [
  {content: 'Mon', isActive: false},
  {content: 'Tue', isActive: false},
  {content: 'Wed', isActive: false},
  {content: 'Thu', isActive: false},
  {content: 'Fri', isActive: false},
  {content: 'Sat', isActive: false},
  {content: 'Sun', isActive: false},
];

const DatePicker = () => {
  const {openModal, Modal} = useModal();
  const datesRef = useRef({});
  const [data, setData] = useState(dataRaw);

  const RenderItem = useCallback(
    ({item, index}: any) => {
      const layoutStyle: any = {borderRadius: 35};
      if (item.isActive) layoutStyle.backgroundColor = '#0172CB';
      return (
        <ViewCustom layout="jc-c ai-c">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              data[index].isActive = !data[index].isActive;
              setData([...data]);
            }}>
            <ViewCustom
              layout="jc-c ai-c bg-cloudd h-35 w-35"
              style={layoutStyle}>
              <TextCustom type="fs-13 cl-white">{item.content}</TextCustom>
            </ViewCustom>
          </TouchableOpacity>
        </ViewCustom>
      );
    },
    [data],
  );
  return (
    <>
      <ViewCustom layout="fd-r jc-b ai-c">
        <TextCustom type="fw-semi fs-16">Today - Web, Mar 1</TextCustom>
        <Icon name="calendar" size={25} onPress={openModal} color={'black'} />
      </ViewCustom>

      <ViewCustom layout="mt-15">
        <Grid data={data} RenderItem={RenderItem} numColumns={7} />
      </ViewCustom>

      <Modal>
        <CalendarCustom datesRef={datesRef} />
      </Modal>
    </>
  );
};

export default DatePicker;
