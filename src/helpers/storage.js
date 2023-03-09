import AsyncStorage from '@react-native-async-storage/async-storage';

export const IS_LAUNCHED = {
  get: async () => await AsyncStorage.getItem('isLaunched'),
  set: async newValue => {
    await AsyncStorage.setItem('isLaunched', newValue);
  },
  delete: async () => await AsyncStorage.removeItem('isLaunched'),
};
