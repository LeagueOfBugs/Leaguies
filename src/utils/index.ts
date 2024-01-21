import {addTeamtoLeague, deleteLeagueTeam} from '../store/reducers/leagues/leagueSlice';
import {deleteTeam, editTm} from '../store/reducers/teams/teamSlice';

export const deleteTeamFromLeagueUpdate = (dispatch, item, leagueId?) => {
  if (item.active) {
    dispatch(editTm({active: false, id: item.id}));
    dispatch(deleteLeagueTeam({leagueId: item.league, teamId: item.id}));
  } else {
    dispatch(editTm({active: true, id: item.id}));
    dispatch(addTeamtoLeague({teamId: item.id, leagueId: leagueId}));
  }
  // need to create delete func for league slice ----DONE
  // find league by id
  // find team by id in league teams and remove ---NEED: league id and team id
  //  edit team activity --- DONE

  //   add a team to a league
  // edit team to include leagueID
  // and in the league store
  // search for the league with league id
  // in league add new team ID
};
