import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { seedPlayer } from '../../../thunks/seedPlayerThunk';

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
        onlineStatus: boolean;
      }>,
    ): Players => {
      const {id, name, team, position, league, agency, image, onlineStatus} = action.payload;
      const newPlayer = {
        id: id || uuid.v4().toString(),
        name: name,
        team: team,
        position: position,
        league: league,
        agency: agency,
        image: image,
        onlineStatus: onlineStatus,
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
    editPlayer: (state, action) => {
      return {
        ...state,
        players: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(seedPlayer.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(seedPlayer.fulfilled, (state, action) => {
        state.loading = false;
        const {data} = action.payload;
        state.players = data;
      })
      .addCase(seedPlayer.rejected, (state, action) => {
        const {data} = action.payload;
        state.loading = false;
        state.error = data;
      });
  },
});

export const {createPlayer, removePlayer, editPlayer} = playerSlice.actions;
export default playerSlice.reducer;
