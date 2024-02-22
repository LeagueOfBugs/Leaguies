import {createSelector} from '@reduxjs/toolkit';

export const selectMatches = (state: RootState) => state.matches;

export const selectMatchBySeasonId = (seasonId: string) =>
  createSelector([selectMatches], ({matches}) => {
    return matches.map(match => match.seasonId === seasonId);
  });

export const selectMatchesByIdBulk = matchIds =>
  createSelector([selectMatches], ({matches}) => {
    return matches.filter(match => matchIds.includes(match.id));
  });
