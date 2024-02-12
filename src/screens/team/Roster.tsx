import React from 'react';
import {Button} from 'react-native-paper';
import {NoStateRoster} from './NoStatesUi';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import usePlayerDetails from '../../hooks/usePlayerDetails';
import {useExtractPersonnel} from '../../hooks/useExtractPersonnel';
import {Squad, TeamStaff} from './RosterCards';

const Roster = () => {
  // team model
  const {team} = usePlayerDetails();
  const teamPlayersId = team.players;
  const benchPlayersId = team.bench;
  const adminIds = team.admin;
  const playerModels = useExtractPersonnel(teamPlayersId);
  const benchPlayerModels = useExtractPersonnel(benchPlayersId);
  const adminModels = useExtractPersonnel(adminIds);
  const hasRoster = playerModels.length > 0;
  return (
    <SafeAreaView style={styles.container}>
      {hasRoster ? (
        <ScrollView>
          <TeamStaff admins={adminModels} />
          <Squad
            playerModels={playerModels}
            limit={team.limit}
            bench={benchPlayerModels}
          />
        </ScrollView>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.messageContainer}>
            <NoStateRoster />
          </View>
          <View style={styles.actionsContainer}>
            <Button mode="contained">RECRUIT PLAYERS</Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0c0c0',
    flex: 1,
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    paddingLeft: '20%',
    paddingRight: '20%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  messageContainer: {},
  actionsContainer: {
    height: 100,
    justifyContent: 'space-between',
  },
});
export default Roster;
