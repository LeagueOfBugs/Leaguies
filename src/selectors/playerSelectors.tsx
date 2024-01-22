import {createSelector} from '@reduxjs/toolkit';

export const selectPlayers = (state: RootState) => state.players;

export const selectFreeAgentPlayers = createSelector(
  [selectPlayers],
  players => {
    const allPlayers = players.players;
    const freeAgents = allPlayers.filter(
      player => player.agency === 'unrestricted',
    );
    return freeAgents;
  },
);

