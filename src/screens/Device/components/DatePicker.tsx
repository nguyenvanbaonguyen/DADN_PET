import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarCustom from '~/components/Calendar/CalendarCustom';
import Grid from '~/components/Grid/Grid';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import useModal from '~/hooks/useModal';
import FeedPortion from './FeedPortionBts';

const dataRaw = [
  {content: 'Mon', isActive: false, val: 1},
  {content: 'Tue', isActive: false, val: 2},
  {content: 'Wed', isActive: false, val: 3},
  {content: 'Thu', isActive: false, val: 4},
  {content: 'Fri', isActive: false, val: 5},
  {content: 'Sat', isActive: false, val: 6},
  {content: 'Sun', isActive: false, val: 0},
];

function dateToRepeat(date) {
  const res = date.filter(ele => ele.isActive).map(ele => ele.content);
  if (res.length === 7) {
    return 'Everyday';
  } else if (res.length === 0) {
    return 'Today - Sun, Apr 23';
  }
  return 'Every ' + res.join(', ');
}

const DatePicker = ({hour, min, closeModal}) => {
  const {openModal, Modal} = useModal();
  const datesRef = useRef({});
  const [data, setData] = useState(dataRaw);

  const times = `${hour}:${min}`;

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
        <TextCustom type="fw-semi fs-16">{dateToRepeat(data)}</TextCustom>
        <Icon name="calendar" size={25} onPress={openModal} color={'black'} />
      </ViewCustom>

      <ViewCustom layout="mt-15">
        <Grid data={data} RenderItem={RenderItem} numColumns={7} />
      </ViewCustom>

      <Modal>
        <CalendarCustom datesRef={datesRef} />
      </Modal>

      <FeedPortion
        times={times}
        closeModal={closeModal}
        weekday={data.filter(ele => ele.isActive).map(ele => ele.val)}
        type={data === dataRaw ? 'once' : 'again'}
      />
    </>
  );
};

export default DatePicker;
