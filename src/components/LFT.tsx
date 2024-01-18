import {View, StyleSheet} from 'react-native';
import {createSelector} from 'reselect';
import {useSelector} from 'react-redux';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Text,
} from '@gluestack-ui/themed';

import React from 'react';

const selectTeams = (state: RootState) => state.teams;

export const selectIncompleteTeams = createSelector(
  [selectTeams],
  teamsArray => {
    const newArr = teamsArray.teams.filter(team => team.players.length < 6);
    return newArr;
  },
);

const LFT = () => {
  const incompleteTeams = useSelector(selectIncompleteTeams);

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Teams looking for players</Heading>
      <View style={styles.teamList}>
        {incompleteTeams.map(team => (
          <View key={team.id} style={styles.teamContainer}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>{team.name}</AvatarFallbackText>
              <AvatarImage />
            </Avatar>
            <Text style={styles.name}>{team.name}</Text>
            <Text>need {6 - team.players.length}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  teamList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  teamContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 15,
    maxWidth: 160,
  },
  title: {
    fontSize: 20,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LFT;
