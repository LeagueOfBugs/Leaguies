import {useState} from 'react';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import usePlayerDetails from './usePlayerDetails';
import {createTeam} from '../store/reducers/teams/teamSlice';

const useTeamDispatch = () => {
  const {user} = usePlayerDetails();
//   console.log('user', user);
  const [teamModel, setTeamModel] = useState({
    id: '',
    active: '',
    badge:
      '/Users/andres/Desktop/UIPractice/leaguies/src/assets/defaultTeamAvatar.png',
    image:
      '/Users/andres/Desktop/UIPractice/leaguies/src/assets/defaultTeamAvatar.png',
    admin: [],
    bench: [],
    players: [],
    league: '',
    record: [],
    seasons: [],
    activity: [],
    requests: [],
    invitations: [],
  });

  const dispatch = useDispatch();

  const createNewTeam = newTeam => {
    const newTeamModel = {...newTeam, ...teamModel, id: uuid.v4().toString()};

    newTeamModel.admin.push(user.id);
    // console.log('newTeamModel', newTeamModel)
    dispatch(createTeam(newTeamModel));
  };

  return {createNewTeam};
};

export default useTeamDispatch;
