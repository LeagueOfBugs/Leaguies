import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {NoStateRules} from './NoStatesUi';
import LeagueDetails from '../../components/card/LeagueDetails';

const Rules = ({league}) => {
  return (
    <SafeAreaView style={styles.container}>
      {league ? (
        <LeagueDetails />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.messageContainer}>
            <NoStateRules />
          </View>
          <View style={styles.actionsContainer} />
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

export default Rules;
