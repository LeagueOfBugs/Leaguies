import {createSelector} from '@reduxjs/toolkit';

export const selectTeams = (state: RootState) => state.teams;

export const selectIncompleteTeams = createSelector([selectTeams], ({teams}) =>
  teams.filter(team => team?.players?.length < 6),
);

export const selectTeamById = (id: string) =>
  createSelector([selectTeams], ({teams}) => {
    return teams.find(team => team.id === id);
  });

export const selectTeamsNoLeague = createSelector([selectTeams], ({teams}) => {
  return teams.filter(team => {
    if (team.league === '') {
      return team;
    }
  });
});

export const selectTeamByIdBulk = (idsArray: string[] | undefined) =>
  createSelector([selectTeams], ({teams}) => {
    return teams.filter(team => idsArray?.includes(team.id));
  });
