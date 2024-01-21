import {deleteLeagueTeam} from '../store/reducers/leagues/leagueSlice';
import {deleteTeam, editTm} from '../store/reducers/teams/teamSlice';

export const deleteTeamFromLeagueUpdate = (dispatch, item) => {
  if (item.active) {
    dispatch(editTm({active: false, id: item.id}));
    dispatch(deleteLeagueTeam({leagueId: item.league, teamId: item.id}));
  } else {
    dispatch(editTm({active: true, id: item.id}));
  }
  // need to create delete func for league slice
  // find league by id
  // find team by id in league teams and remove __ NEED: league id and team id
  //   add a team to a league
  // edit team to include leagueID
  //  edit team activity --- DONE
  // and in the league store
  // search for the league with league id
  // in league add new team ID
};
