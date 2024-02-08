import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

import React from 'react';
import {NoStateRecord} from './NoStatesUi';

const Record = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.messageContainer}>
          <NoStateRecord />
        </View>
        <View style={styles.actionsContainer}>
          <Button mode="contained">JOIN A SEASON</Button>
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

export default Record;
