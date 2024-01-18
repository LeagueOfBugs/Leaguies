import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';

const Team = () => {
  const {teams} = useSelector((state: RootState) => state.teams);
  const myTeam = teams.find(
    team => team.id === '905b4d32-ee84-4d1d-8d88-2d14416cfab9',
  );
  return (
    <View>
      <Text>{myTeam.name}</Text>
      <Text>{myTeam.league}</Text>
      <Text>{myTeam.record}</Text>
    </View>
  );
};

export default Team;
