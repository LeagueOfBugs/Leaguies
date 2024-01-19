import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {createLeague} from '../../store/reducers/leagues/leagueSlice';
import LeagueList from '../../components/LeagueList';

const League = () => {
  const [leagueName, setLeagueName] = useState('');
  const dispatch = useDispatch();
  const {leagues} = useSelector((state: RootState) => state.leagues);

  const handleSubmit = () => {
    dispatch(createLeague({name: leagueName}));
  };

  const renderCreateLeague = () => {
    return (
      <>
        <Text>Create a League</Text>
        <TextInput
          value={leagueName}
          onChangeText={setLeagueName}
          placeholder="Pick a league name"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </>
    );
  };

  return (
    <View>
      {!(leagues.length > 0) ? (
        renderCreateLeague()
      ) : (
        <LeagueList leagues={leagues} />
      )}
    </View>
  );
};

export default League;
