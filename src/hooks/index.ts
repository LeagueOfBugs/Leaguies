import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createTeam} from '../store/reducers/teams/teamSlice';
import {createPlayer} from '../store/reducers/players/playerSlice';
import {SEED} from '../constants';
import {createSeason} from '../store/reducers/seasons/seasonSlice';
import {createMatch} from '../store/reducers/matches/matchesSlice';
import {seedPlayer} from '../thunks/seedPlayerThunk';

export const useSeedRedux = userId => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seedPlayer());
    // Seed teams
    SEED.teams.forEach(team => {
      return dispatch(createTeam(team));
    });

    // Seed players
    SEED.players.forEach(player => {
      dispatch(createPlayer(player));
    });

    // // Seed leagues
    // SEED.leagues.forEach(league => {
    //   dispatch(createLeague(league));
    // });

    // Seed seasons
    SEED.seasons.forEach(season => {
      dispatch(createSeason(season));
    });

    // // Seed matches
    SEED.matches.forEach(match => {
      dispatch(createMatch(match));
    });
  }, [dispatch]);
};
