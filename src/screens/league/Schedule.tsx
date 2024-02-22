import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import {Button} from 'react-native-paper';
import {NoStateSchedule} from './NoStatesUi';
import SeasonSchedule from '../../components/card/SeasonSchedule';
import {useRoute} from '@react-navigation/native';

const Schedule = () => {
  const route = useRoute();
  const {hasSeason, season} = route.params;
  console.log('In schedule');
  return (
    <SafeAreaView style={styles.container}>
      {hasSeason ? (
        <SeasonSchedule season={season} />
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

export default memo(Schedule);
