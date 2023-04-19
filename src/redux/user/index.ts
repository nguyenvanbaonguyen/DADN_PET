import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import authApi from '~/api/auth/authApi';
import {USER_TOKEN} from '~/helpers/auth';

const initialState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => (state = action.payload),
  },
});

export const callMe = () => async dispatch => {
  const res = await authApi.getUserInfo();
  const user = res?.data;
  dispatch(setUser(user));
  return user;
};

export const loginUser = userLogin => async dispatch => {
  try {
    const res = await authApi.login(userLogin);
    if (res.status !== 200) {
      console.log('Error ', res);
      return;
    }
    console.log('Response ', res.data);
    const {token, refresh_token, expiredRefresh, expiredToken, user_info} =
      res?.data?.data;

    USER_TOKEN.set({
      token,
      expiredToken,
      refresh_token,
      expiredRefresh,
    });
    dispatch(setUser(user_info));
    return user_info;
  } catch (err) {
    throw err;
  }
};

// export const loginUser = userLogin => async () => {
//   try {
//     const res = await authApi.login(userLogin);
//     if (res.status !== 200) {
//       console.log('Error ', res);
//     } else {
//       console.log('Response ', res.data);
//     }
//     return res.data;
//   } catch (err) {
//     throw err;
//   }
// };

export const getUser = state => state?.user;

export const getIsAdmin = state => state?.user?.partner_role === 100;

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
