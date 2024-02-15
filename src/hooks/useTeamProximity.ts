import {useCallback, useEffect, useState} from 'react';
import {proximityLocations} from '../thunks/proximityLocations';
import {useDispatch} from 'react-redux';
import Geocoder from 'react-native-geocoding';

export const useRetrieveCoordinates = (address: string) => {
  const [coordinates, setCoordinates] = useState({
    searchLocation: {
      lat: Infinity,
      long: Infinity,
    },
  });

  const key = 'AIzaSyBGIr75oXUdjdwffvo1Q0ROKftQK0FOUJ4';

  const getCoordinates = useCallback(async () => {
    Geocoder.init(key);
    const result = await Geocoder.from(address);
    const {lat, lng} = result.results[0].geometry.location;
    setCoordinates({searchLocation: {lat: lat, long: lng}});
  }, [address]);

  useEffect(() => {
    getCoordinates();
  }, [address, getCoordinates]);
  // retriveNearby();
  return coordinates;
};

export const useProximityLocations = coordinates => {
  const {searchLocation} = coordinates;

  const dispatch = useDispatch();
  useEffect(() => {
    const locationPayload = {
      tableName: 'team-location-hash',
      searchLocation,
    };
    // console.log('coordinates', locationPayload);
    dispatch(proximityLocations(locationPayload));
  }, [coordinates, dispatch, searchLocation]);
};
