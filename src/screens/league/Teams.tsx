import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NoStateTeams} from './NoStatesUi';

const Teams = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.messageContainer}>
          <NoStateTeams />
        </View>
        <View style={styles.actionsContainer}>
          <Button mode="contained">JOIN A Teams</Button>
        </View>
      </View>
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
