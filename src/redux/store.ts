import {configureStore} from '@reduxjs/toolkit';
import device from './device/device';
import listDevice from './listDevice/listDevice';
import pet from './pet/pet';
import schedule from './schedule/schedule';
import user from './user';

const store = configureStore({
  reducer: {
    user: user,
    pet: pet,
    device: device,
    listDevice: listDevice,
    schedule: schedule,
  },
});

export default store;
