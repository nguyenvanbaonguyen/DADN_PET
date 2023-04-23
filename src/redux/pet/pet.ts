import {createSlice} from '@reduxjs/toolkit';
import petApi from '~/api/pet/petApi';

const initialState = null;

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setPet: (state, action) => (state = action.payload),
  },
});

export const getPet = (id) => async dispatch => {
  const res = await petApi.getPet(id);
  const pet = res?.data;
  dispatch(setPet(pet));
  return pet;
};

export const getListPet = () => async () => {
  const res = await petApi.getListPet();
  const listPet = res?.data;
  console.log('pet ', listPet);
  return listPet;
};

export const {setPet} = petSlice.actions;

export default petSlice.reducer;
