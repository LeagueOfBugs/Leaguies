import {createSelector} from '@reduxjs/toolkit';

export const selectPlayers = (state: RootState) => state.players;

export const selectFreeAgentPlayers = createSelector(
  [selectPlayers],
  ({players}) => {
    const allPlayers = players;
    const freeAgents = allPlayers.filter(
      player => player.agency === 'unrestricted',
    );
    return freeAgents;
  },
);

export const selectPlayerById = (playerId: string) =>
  createSelector([selectPlayers], ({players}) => {
    const playerFound = players.find(player => {
      if (playerId === player.id) {
        console.log('found');
      }
      return player.id === playerId;
    });
    return playerFound;
  });

export const selectPlayerByIdBulk = (playerIds: string[]) =>
  createSelector([selectPlayers], ({players}) => {
    return players.filter(player => playerIds.includes(player.id));
  });
