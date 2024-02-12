import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NoStateSchedule} from './NoStatesUi';
import usePlayerDetails from '../../hooks/usePlayerDetails';
import SeasonSchedule from '../../components/card/SeasonSchedule';

const Schedule = () => {
  const {season} = usePlayerDetails();

  return (
    <SafeAreaView style={styles.container}>
      {season ? (
        <SeasonSchedule />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.messageContainer}>
            <NoStateSchedule />
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

export default Schedule;
