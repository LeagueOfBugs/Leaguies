import {
  addTeamtoLeague,
  deleteLeagueTeam,
} from '../store/reducers/leagues/leagueSlice';
import {editTm} from '../store/reducers/teams/teamSlice';

export const deleteTeamFromLeagueUpdate = (dispatch, item, leagueId?) => {
  if (item.active) {
    dispatch(editTm({active: false, id: item.id}));
    dispatch(deleteLeagueTeam({leagueId: item.league, teamId: item.id}));
  } else {
    dispatch(editTm({active: true, id: item.id}));
    dispatch(addTeamtoLeague({teamId: item.id, leagueId: leagueId}));
  }
};
