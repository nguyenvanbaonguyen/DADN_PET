import {createSlice} from '@reduxjs/toolkit';
import deviceApi from '~/api/device/deviceApi';

const initialState = null;

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice: (state, action) => (state = action.payload),
  },
});

export const createDevice = (index, params) => async dispatch => {
  try {
    const res = await deviceApi.createDevice(index, params);
    if (res.status !== 201) {
      console.log('Error ', res);
      return;
    }
    console.log('Response ', res.data);
    const {device_info} = res?.data?.data;
    dispatch(setDevice(device_info));
    return device_info;
  } catch (error) {
    throw error;
  }
};

export const getDevice = (id) => async dispatch => {
  const res = await deviceApi.getDevice(id);
  const device = res?.data;
  dispatch(setDevice(device));
  return device;
};

export const getHistory = (id) => async dispatch => {
  const res = await deviceApi.getHistory(id);
  const history = res?.data;
  return history;
};

export const sendFood = (index, params) => async () => {
  try {
    const res = await deviceApi.sendFood(index, params);
    if (res.status !== 201) {
      console.log('Error send food ', res);
      return;
    }
    console.log('Response send food: ', res.data);
    const {sendFood_info} = res?.data;
    return sendFood_info;
  } catch (error) {
    throw error;
  }
};

// export const getListDevices = (id) => async () => {
//   const res = await deviceApi.getListDevices(id);
//   const listDevice = res?.data;
//   console.log('devices ', listDevice);
//   return listDevice;
// };

export const {setDevice} = deviceSlice.actions;

export default deviceSlice.reducer;
