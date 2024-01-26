import {createSelector} from '@reduxjs/toolkit';

export const selectSeasons = (state: RootState) => state.seasons;

export const selectSeasonsObjById = (seasonId: string) =>
  createSelector([selectSeasons], ({seasons}) => {
    return seasons.find(season => season.id === seasonId);
  });

export const selectSeasonsObjByLeagueId = (leagueId: string) =>
  createSelector([selectSeasons], ({seasons}) => {
    return seasons.filter(season => season.leagueId === leagueId);
  });
