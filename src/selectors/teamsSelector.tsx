import {createSelector} from '@reduxjs/toolkit';

export const selectTeams = (state: RootState) => state.teams;

export const selectIncompleteTeams = createSelector([selectTeams], ({teams}) =>
  teams.filter(team => team.players.length < 6),
);

export const selectTeamById = (id: string) =>
  createSelector(
    [selectTeams],
    ({teams}) => teams.filter(team => team.id === id) || null,
  );
