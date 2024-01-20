import {deleteTeam, editTm} from '../store/reducers/teams/teamSlice';

export const deleteTeamFromLeagueUpdate = (dispatch, id) => {
  dispatch(editTm({active: false, id: id}));
//   dispatch(deleteTeam(id));
};
