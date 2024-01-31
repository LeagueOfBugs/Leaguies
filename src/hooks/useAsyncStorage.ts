import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = () => {
  const getValue = async (key: string) => {
    try {
      const response = await AsyncStorage.getItem(key);
      if (response !== null) {
        return JSON.parse(response);
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  const setValue = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return {getValue, setValue};
};

export default useAsyncStorage;
