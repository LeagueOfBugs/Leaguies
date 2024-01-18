// store.js
import {configureStore} from '@reduxjs/toolkit';
import leagueReducer from './reducers/leagues/leagueSlice';
import teamsReducer from './reducers/teams/teamSlice';
import playerReducer from './reducers/players/playerSlice';

const store = configureStore({
  reducer: {
    leagues: leagueReducer,
    teams: teamsReducer,
    players: playerReducer,
  },
  devTools: true,
});

export default store;
