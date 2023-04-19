import axios from 'axios';
import {isTokenExpired, refreshAccessToken, USER_TOKEN} from '~/helpers/auth';

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs
const axiosClient = axios.create({
  baseURL: 'http://103.161.17.45',
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async config => {
  const data = await USER_TOKEN.get();
  const {token} = data;
  const {accessToken, expiredAccessToken, expiredFreshToken, refreshToken} =
    token;
  if (isTokenExpired(expiredFreshToken)) {
    throw new axios.Cancel('Refresh token expired');
  }

  if (isTokenExpired(expiredAccessToken)) {
    const {newToken, newFreshToken, newExpiredToken, newExpiredRefresh} =
      await refreshAccessToken(refreshToken);

    USER_TOKEN.set({
      accessToken: newToken,
      expiredAccessToken: newExpiredToken,
      expiredFreshToken: newExpiredRefresh,
      refreshToken: newFreshToken,
    });
    config.headers.Authorization = `Bearer ${newToken}`;
  } else {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (config?.customUrl) {
    config.baseURL = config.customUrl;
  }

  if (config?.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // Handle errors
    throw error;
  },
);

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs
export const axiosClientNoToken = axios.create({
  baseURL: 'http://103.161.17.45',
  headers: {
    'content-type': 'application/json',
  },
});

axiosClientNoToken.interceptors.request.use(async config => {
  if (config?.customUrl) {
    config.baseURL = config.customUrl;
  }
  if (config?.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});

axiosClientNoToken.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // Handle errors
    throw error;
  },
);

export default axiosClient;
