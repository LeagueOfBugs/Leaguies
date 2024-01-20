import {createSelector} from '@reduxjs/toolkit';

export const selectTeams = (state: RootState) => state.teams;

export const selectIncompleteTeams = createSelector([selectTeams], ({teams}) =>
  teams.filter(team => team.players.length < 6),
);
