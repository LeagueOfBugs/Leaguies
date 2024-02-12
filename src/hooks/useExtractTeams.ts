import {useSelector} from 'react-redux';
import {selectTeamByIdBulk} from '../selectors/teamsSelector';

const useExtractTeams = teamIds => {
  const teamModels = useSelector(selectTeamByIdBulk(teamIds));
  return teamModels;
};

export default useExtractTeams;
