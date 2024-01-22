import {createSelector} from '@reduxjs/toolkit';

export const selectLeagues = (state: RootState) => state.leagues;

export const selectLeagueById = (leagueId: string) =>
  createSelector([selectLeagues], ({leagues}) =>
    leagues.find(league => league.id === leagueId),
  );
