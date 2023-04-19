import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarCustom = ({datesRef}: any) => {
  const [dates, setDates] = useState<any>(datesRef.current);

  const {width, height} = Dimensions.get('window');
  return (
    <Calendar
      // Initially visible month. Default = now
      markedDates={dates}
      onDayPress={day => {
        const isDayReturn = dates[day.dateString]
          ? undefined
          : {selected: true};
        const newDates = {...dates, [day.dateString]: isDayReturn};
        setDates(newDates);
        datesRef.current = newDates;
      }}
      style={{width: width * 0.9}}
    />
  );
};

export default CalendarCustom;
