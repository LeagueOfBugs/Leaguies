import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const initialState: Teams = {
  teams: [],
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    createTeam: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        players: Player[];
        league: string;
      }>,
    ) => {
      const {id, name, league, players} = action.payload;
      const newTeam: Team = {
        id: id || uuid.v4().toString(),
        name: name,
        players: [...players],
        league: league,
        record: '',
      };
      state.teams.push(newTeam);
      return state;
    },

    // addPlayer: (state, action: PayloadAction<{player: Player}>): Team => {
    //   const {player} = action.payload;
    //   return {
    //     ...state,
    //     players: [],
    //   };
    // },

    // deleteTeam: (): Team => {
    //   return initialState;
    // },

    // joinLeague: (state, action: PayloadAction<{leagueId: string}>): Team => {
    //   const {leagueId} = action.payload;
    //   return {
    //     ...state,
    //     league: leagueId,
    //   };
    // },
  },
});
export const {createTeam} = teamSlice.actions;
export default teamSlice.reducer;
