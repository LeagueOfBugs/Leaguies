import {createSelector} from '@reduxjs/toolkit';

export const selectLeagues = (state: RootState) => state.leagues;

export const selectNearby = (state: RootState) => state.leagues.nearbyTeams;

export const selectLeagueById = (leagueId: string) =>
  createSelector([selectLeagues], ({leagues}) => {
    return leagues.find(league => league.id === leagueId);
  });

export const selectLeagueByName = (name: string) =>
  createSelector([selectLeagues], ({leagues}) => {
    return leagues.find(league => league.name === name);
  });

export const selectLeagueByIdBulk = (idsArray: string[] | undefined) =>
  createSelector([selectLeagues], ({leagues}) => {
    return leagues.filter(league => idsArray?.includes(league.id));
  });
