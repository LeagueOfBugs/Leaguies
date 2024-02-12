import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NoStateTeams} from './NoStatesUi';
import usePlayerDetails from '../../hooks/usePlayerDetails';
import RegisteredTeams from '../../components/card/RegisteredTeams';
import RecommendedTeams from '../../components/card/RecommendedTeams';

const Teams = () => {
  const {league} = usePlayerDetails();
  const teamIds = league.teams;
  const LeagueTeamLimit = league.limit;

  return (
    <SafeAreaView style={styles.container}>
      {league ? (
        <ScrollView>
          <RegisteredTeams teams={teamIds} limit={LeagueTeamLimit} />
          <RecommendedTeams />
        </ScrollView>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.messageContainer}>
            <NoStateTeams />
          </View>
          <View style={styles.actionsContainer}>
            <Button mode="contained">JOIN A Teams</Button>
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

export default Teams;
