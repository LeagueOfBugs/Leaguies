// leagueSlice.js
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {useSelector} from 'react-redux';
import {selectTeamById} from '../../../selectors/teamsSelector';
const initialState: Leagues = {
  leagues: [],
};

const leagueSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    createLeague: (
      state,
      action: PayloadAction<{
        id?: string;
        name: string;
        badge: string;
        image: string;
        teams: string[];
        limit: number;
        seasonId: string;
      }>,
    ): Leagues => {
      const {id, name, teams, badge, image, limit, seasonId} = action.payload;
      const newLeague = {
        id: id || uuid.v4().toString(),
        name: name,
        teams: teams,
        badge: badge,
        image: image,
        limit: limit,
        seasonId: seasonId,
      };
      state.leagues.push(newLeague);
      return state;
    },
    deleteTeam: (state, action) => {
      return action.payload;
    },
    addTeam: (state, action) => {
      return action.payload;
    },
  },
});

export const {createLeague, deleteTeam, addTeam} = leagueSlice.actions;
export default leagueSlice.reducer;
