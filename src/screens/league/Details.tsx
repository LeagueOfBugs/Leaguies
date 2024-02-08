import {Text, Image, StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const Details = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={styles.badgeContainer}>
          <View style={styles.leagueBadge} />
          {/* <Image /> */}
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.centerText, styles.name]}>League Name</Text>
          <Text style={[styles.centerText]}>Sport or start end dates</Text>
          <View style={styles.quickActionContainer}>
            <Button compact={true}>JOIN</Button>
            <Button>FOLLOW</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    maxHeight: 170,
    minHeight: 170,
    width: '100%',
  },
  playerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  quickActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    flex: 2,
  },
  leagueBadge: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#000000',
  },
  name: {
    fontSize: 30,
  },
});

export default Details;
