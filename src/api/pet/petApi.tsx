import axiosClient from '../axiosClient';

const petApi = {
  getPet: (index) => {
    const url = `/api/v1/pets/${index}`;
    return axiosClient.get(url);
  },
  getListPet: () => {
    const url = '/api/v1/users/me/pet';
    return axiosClient.get(url);
  },
};

export default petApi;
