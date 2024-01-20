import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const initialState: Players = {
  players: [],
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    createPlayer: (
      state,
      action: PayloadAction<{
        id?: string;
        name: string;
        team: string;
        position: string;
        league: string;
        agency: string;
        image: string;
      }>,
    ): Players => {
      const {id, name, team, position, league, agency, image} = action.payload;
      const newPlayer = {
        id: id || uuid.v4().toString(),
        name: name,
        team: team,
        position: position,
        league: league,
        agency: agency,
        image: image,
      };
      state.players.push(newPlayer);
      return state;
    },
    removePlayer: (
      state,
      action: PayloadAction<{playerId: string}>,
    ): Players => {
      const {playerId} = action.payload;
      return {
        players: state.players.filter(player => player.id !== playerId),
      };
    },
    editPlyr: (state, action: PayloadAction<Partial<Player>>) => {
      const updatedPlayer = action.payload;
      const playerIndex = state.players.findIndex(
        player => player.id === updatedPlayer.id,
      );

      if (playerIndex !== -1) {
        state.players[playerIndex] = {
          ...state.players[playerIndex],
          ...updatedPlayer,
        };
      }
      return state;
    },
  },
});

export const {createPlayer, removePlayer, editPlyr} = playerSlice.actions;
export default playerSlice.reducer;
