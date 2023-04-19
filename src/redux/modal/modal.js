import {createSlice} from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    type: '',
    isOpenModal: false,
    content: '',
  },
  reducers: {
    openModal: (state, action) => {
      return {...state, ...action.payload, isOpenModal: true};
    },
    closeModal: state => {
      state.isOpenModal = false;
    },
  },
});

export const {openModal, closeModal} = modalSlice.actions;

export const getIsOpenModal = state => state.modal.isOpenModal;

export const getModal = state => state.modal;

export default modalSlice.reducer;
