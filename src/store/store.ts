// store.js
import {configureStore} from '@reduxjs/toolkit';
import leagueReducer from './reducers/leagues/leagueSlice';
import teamsReducer from './reducers/teams/teamSlice';
import playerReducer from './reducers/players/playerSlice';
import seasonReducer from './reducers/seasons/seasonSlice';
import matchReducer from './reducers/matches/matchesSlice';

const store = configureStore({
  reducer: {
    leagues: leagueReducer,
    teams: teamsReducer,
    players: playerReducer,
    seasons: seasonReducer,
    matches: matchReducer,
  },
  devTools: true,
});

export default store;
