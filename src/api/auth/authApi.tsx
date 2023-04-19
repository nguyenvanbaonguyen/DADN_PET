import axiosClient, {axiosClientNoToken} from '../axiosClient';

const authApi = {
  login: params => axiosClientNoToken.post('/api/v1/auth/login', params),
  refreshToken: refresh_token => {
    const url = '/api/v1/auth/refresh-token';
    return axiosClientNoToken.post(url, {refresh_token});
  },
  getUserInfo: () => {
    const url = '/api/v1/users/me';
    return axiosClient.get(url);
  },
};

export default authApi;
