import {createSlice} from '@reduxjs/toolkit';
import deviceApi from '~/api/device/deviceApi';

const initialState = {
  count: 0,
  schedules: [],
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      const schedule = action.payload;
      console.log('payload ', action.payload);
      state.schedules.push(schedule);
      state.count += 1;
    },
  },
});

export const createSchedule = (index, params) => async dispatch => {
  try {
    const res = await deviceApi.createSchedule(index, params);
    if (res.status !== 201) {
      console.log('Error ', res);
      return;
    }
    console.log('Response ', res);
    const schedule = res?.data;
    dispatch(addSchedule(schedule));
    return schedule;
  } catch (error) {
    throw error;
  }
};

export const getSchedules = (index) => async () => {
  try {
    const res = await deviceApi.getSchedules(index);
    const schedules = res?.data;
    console.log('viet ', schedules);
    return schedules;
  } catch (error) {
    throw error;
  }
};

// export const getListDevices = (id) => async dispatch => {
//   try {
//     const res = await deviceApi.getListDevices(id);
//     const listDevice = res?.data;
//     console.log('devices ', listDevice);
//     dispatch(setListDevice(listDevice));
//     return listDevice;
//   } catch (error) {
//     throw error;
//   }
// };

export const {addSchedule} = scheduleSlice.actions;

export default scheduleSlice.reducer;
