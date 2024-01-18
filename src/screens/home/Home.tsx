import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LeagueList from '../../components/LeagueList';
import {createPlayer} from '../../store/reducers/players/playerSlice';
import {createTeam} from '../../store/reducers/teams/teamSlice';
import {createLeague} from '../../store/reducers/leagues/leagueSlice';
import {SEED, FREE_AGENT} from '../../constants';
import LFP from '../../components/LFP';
import LFT from '../../components/LFT';

const Home = () => {
  const dispatch = useDispatch();
  const {leagues} = useSelector((state: RootState) => state.leagues);

  useEffect(() => {
    dispatch(createPlayer(SEED.player));
    dispatch(createLeague(SEED.leagues[0]));
    dispatch(createLeague(SEED.leagues[1]));
    dispatch(createTeam(SEED.team[0]));
    dispatch(createTeam(SEED.team[1]));
    dispatch(createTeam(SEED.team[2]));
    dispatch(createTeam(SEED.team[3]));
    dispatch(createTeam(SEED.team[4]));
    dispatch(createPlayer(FREE_AGENT[0]));
    dispatch(createPlayer(FREE_AGENT[1]));
    dispatch(createPlayer(FREE_AGENT[2]));
  }, [dispatch]);

  const renderItem = ({item}) => {
    if (item === 'leagues') {
      return <LeagueList leagues={leagues} />;
    } else if (item === 'LFP') {
      return <LFP />;
    } else if (item === 'LFT') {
      return <LFT />;
    }
  };

  return (
    <FlatList
      data={['leagues', 'LFP', 'LFT']}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
  },
});
