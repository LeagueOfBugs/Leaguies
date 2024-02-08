import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const Details = () => {
  /*
    teamName
    team sport
    team image
    */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <Image />
        <View>
          <Text style={[styles.centerText]}>Team Name</Text>
        </View>
        <View>
          <Text style={[styles.centerText]}>Sport</Text>
        </View>
      </View>
      <View style={styles.quickActionContainer}>
        <Button mode="contained">REQUEST TO JOIN</Button>
        <Button mode="contained">FOLLOW TEAM</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    maxHeight: 250,
    minHeight: 250,
  },
  playerContainer: {
    flex: 1,
  },
  quickActionContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  centerText: {
    textAlign: 'center',
  },
});

export default Details;
