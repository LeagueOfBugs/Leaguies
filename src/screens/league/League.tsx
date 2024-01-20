import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {createLeague} from '../../store/reducers/leagues/leagueSlice';
import LeagueList from '../../components/LeagueList';
import SectionContainer from '../../components/SectionContainer';

const League = ({navigation}) => {
  const [leagueName, setLeagueName] = useState('');
  const dispatch = useDispatch();
  const {leagues} = useSelector((state: RootState) => state.leagues);

  const handleSubmit = () => {
    dispatch(createLeague({name: leagueName}));
  };

  const renderCreateLeague = () => {
    return (
      <>
        <Text style={styles.whiteFont}>Create a League</Text>
        <TextInput
          style={styles.whiteFont}
          value={leagueName}
          onChangeText={setLeagueName}
          placeholder="Pick a league name"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SectionContainer title="Leagues">
        {!(leagues.length > 0) ? (
          renderCreateLeague()
        ) : (
          <LeagueList leagues={leagues} navigation={navigation} />
        )}
      </SectionContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1C1C1D',
    height: '100%',
  },
  whiteFont: {
    color: '#ffffff',
  },
});

export default League;
