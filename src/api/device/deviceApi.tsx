import axiosClient from '../axiosClient';

const deviceApi = {
  createDevice: (index, params) =>
    axiosClient.post(`/api/v1/pets/${index}/devices`, params),
  getDevice: index => {
    const url = `/api/v1/devices/${index}`;
    return axiosClient.get(url);
  },
  getListDevices: index => {
    const url = `/api/v1/pets/${index}/devices`;
    return axiosClient.get(url);
  },
  sendFood: (index, params) =>
    axiosClient.post(`/api/v1/devices/${index}/signal`, params),
  createSchedule: (index, params) =>
    axiosClient.post(`/api/v1/devices/${index}/schedules`, params),
  getSchedules: index => axiosClient.get(`/api/v1/devices/${index}/schedules`),
  getHistory: index => axiosClient.get(`/api/v1/devices/${index}/history-device`)
};

export default deviceApi;
