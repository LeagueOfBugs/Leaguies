import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import useAsyncStorage from '../hooks/useAsyncStorage';

interface ProximityLocationsProps {
  tableName: string;
  searchLocation: {
    lat: number;
    long: number;
  };
}
const GEO_HASH_ENDPOINT =
  'https://hn324lfif9.execute-api.us-east-2.amazonaws.com/Alpha/proximity';

export const proximityLocations = createAsyncThunk(
  'location/locationProximity',
  async (locationPayload: ProximityLocationsProps) => {
    const tableName = locationPayload.tableName;
    const searchLocation = locationPayload.searchLocation;
    // const {getValue} = useAsyncStorage();
    // const {iT} = await getValue('user');
    try {
      const response = await axios.post(
        GEO_HASH_ENDPOINT,
        {
          tableName,
          searchLocation,
        },
        // {
        //   headers: {
        //     Authorization: iT,
        //   },
        // },
      );
      if (response.data.statusCode === 200) {
        return {
          data: JSON.parse(response.data.body),
        };
      }
      return new Error('Something went wrong');
    } catch (error) {
      console.error('Error with user auth', error);
      throw error;
    }
  },
);
