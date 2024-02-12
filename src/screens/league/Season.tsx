import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NoStateSeason} from './NoStatesUi';
import usePlayerDetails from '../../hooks/usePlayerDetails';
import SeasonDetails from '../../components/card/SeasonDetails';
import SeasonManagers from '../../components/card/SeasonManagers';
import useMPlayerDetails from '../../hooks/useMPlayerDetails';

const Season = () => {
  const {season, league} = usePlayerDetails();
  const leagueAdminModels = useMPlayerDetails(league.admin);
  return (
    <SafeAreaView style={styles.container}>
      {season ? (
        <ScrollView>
          <View style={styles.scrollConatiner}>
            <SeasonManagers admin={leagueAdminModels} />
            <SeasonDetails season={season} />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.messageContainer}>
            <NoStateSeason />
          </View>
          <View style={styles.actionsContainer}>
            <Button mode="contained">JOIN A SEASON</Button>
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
    flex: 1,
    paddingLeft: '20%',
    paddingRight: '20%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  messageContainer: {},
  actionsContainer: {
    height: 100,
  },
  scrollConatiner: {
    marginBottom: 16,
  },
});

export default Season;