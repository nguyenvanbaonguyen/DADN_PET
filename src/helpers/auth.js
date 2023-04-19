import authApi from '~/api/auth/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isTokenExpired = dateExpired => {
  if (!dateExpired) return true;

  return +dateExpired < Date.now();
};

export const refreshAccessToken = async refresh_token => {
  const data = await authApi.refreshToken(refresh_token);

  const {
    accessToken: newToken,
    refreshToken: newFreshToken,
    expiredAccessToken: newExpiredToken,
    expiredFreshToken: newExpiredRefresh,
  } = data.data;

  return {
    newToken,
    newFreshToken,
    newExpiredToken,
    newExpiredRefresh,
  };
};

// export const USER_TOKEN = {
//   get: () => {
//     const data = AsyncStorage.getItem('userToken');
//     return JSON.parse(data);
//   },
//   set: newValue => {
//     AsyncStorage.setItem('userToken', JSON.stringify(newValue));
//   },
//   delete: () => AsyncStorage.removeItem('userToken'),
// };

export const USER_TOKEN = {
  get: async () => {
    try {
      const data = await AsyncStorage.getItem('userToken');
      if (data != null) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.log(error);
    }
  },
  set: async newValue => {
    try {
      await AsyncStorage.setItem('userToken', JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  },
  delete: async () => {
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (error) {
      console.log(error);
    }
  },
};
