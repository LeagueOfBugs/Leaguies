import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createTeam} from '../store/reducers/teams/teamSlice';
import {createPlayer} from '../store/reducers/players/playerSlice';
import {createLeague} from '../store/reducers/leagues/leagueSlice';
import {SEED} from '../constants';

const useSeedRedux = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Seed teams
    SEED.teams.forEach(team => {
      return dispatch(createTeam(team));
    });

    // Seed players
    SEED.players.forEach(player => {
      dispatch(createPlayer(player));
    });

    // Seed leagues
    SEED.leagues.forEach(league => {
      dispatch(createLeague(league));
    });
  }, [dispatch]);
};

export default useSeedRedux;
