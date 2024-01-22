import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createTeam} from '../store/reducers/teams/teamSlice';
import {createPlayer} from '../store/reducers/players/playerSlice';
import {createLeague} from '../store/reducers/leagues/leagueSlice';
import {SEED} from '../constants';
import {selectLeagues} from '../selectors/leagueSelector';

export const useSeedRedux = () => {
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
