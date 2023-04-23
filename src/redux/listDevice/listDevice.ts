import {createSlice} from '@reduxjs/toolkit';
import deviceApi from '~/api/device/deviceApi';

const initialState = [];

const listDeviceSlice = createSlice({
  name: 'listDevice',
  initialState,
  reducers: {
    setListDevice: (state, action) => {
      const device = action.payload;
      state.push(device);
    },
  },
});

// export const createDevice = (index, params) => async dispatch => {
//   try {
//     const res = await deviceApi.createDevice(index, params);
//     if (res.status !== 201) {
//       console.log('Error ', res);
//       return;
//     }
//     console.log('Response ', res.data);
//     const {device_info} = res?.data?.data;
//     dispatch(setDevice(device_info));
//     return device_info;
//   } catch (error) {
//     throw error;
//   }
// };

export const getListDevices = (id) => async dispatch => {
  try {
    const res = await deviceApi.getListDevices(id);
    const listDevice = res?.data;
    console.log('devices ', listDevice);
    dispatch(setListDevice(listDevice));
    return listDevice;
  } catch (error) {
    throw error;
  }
};

export const {setListDevice} = listDeviceSlice.actions;

export default listDeviceSlice.reducer;
