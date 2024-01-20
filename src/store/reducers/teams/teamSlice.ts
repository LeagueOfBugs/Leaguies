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
        players: string[];
        league: string;
        record: number[];
        badge: string;
        image: string;
        limit: number;
        active: boolean;
      }>,
    ) => {
      const {id, name, league, players, record, badge, image, limit, active} =
        action.payload;
      const newTeam: Team = {
        id: id || uuid.v4().toString(),
        name: name,
        players: players,
        league: league,
        record: record,
        badge: badge,
        image: image,
        limit: limit,
        active: active,
      };
      state.teams.push(newTeam);
      return state;
    },
    editTm: (state, action: PayloadAction<Partial<Team>>) => {
      const updatedTeam = action.payload;
      const teamIndex = state.teams.findIndex(team => {
        return team.id === updatedTeam.id;
      });


      if (teamIndex !== -1) {
        state.teams[teamIndex] = {
          ...state.teams[teamIndex],
          ...updatedTeam,
        };
      }
      return state;
    },
    deleteTeam: (state, action: PayloadAction<string>) => {
      const teamIdToDelete = action.payload;
      state.teams = state.teams.filter(team => team.id !== teamIdToDelete);
      return state;
    },
  },
});
export const {createTeam, editTm, deleteTeam} = teamSlice.actions;
export default teamSlice.reducer;
