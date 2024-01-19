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
        record: [];
      }>,
    ) => {
      const {id, name, league, players, record} = action.payload;
      const newTeam: Team = {
        id: id || uuid.v4().toString(),
        name: name,
        players: [...players],
        league: league,
        record: record,
      };
      state.teams.push(newTeam);
      return state;
    },
    edit: (state, action: PayloadAction<Partial<Team>>) => {
      const updatedTeam = action.payload;
      const teamIndex = state.teams.findIndex(
        team => team.id === updatedTeam.id,
      );

      if (teamIndex !== -1) {
        state.teams[teamIndex] = {
          ...state.teams[teamIndex],
          ...updatedTeam,
        };
      }
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
export const {createTeam, edit} = teamSlice.actions;
export default teamSlice.reducer;
