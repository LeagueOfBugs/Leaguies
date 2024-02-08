import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Matchups = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <View style={styles.team}>
          <View style={styles.teamImage} />
          <Text style={styles.teamName}>home team</Text>
          <Text style={styles.teamRecord}> (0 - 0)</Text>
        </View>
        <View style={styles.team}>
          <View style={styles.teamImage} />
          <Text style={styles.teamName}>away team</Text>
          <Text style={styles.teamRecord}> (0 - 0)</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Today</Text>
          <Text style={styles.infoText}>8:30 PM</Text>
          <Text style={styles.infoText}>Binghamton, NY</Text>
        </View>
        <View style={styles.chevronContainer}>
          <View style={styles.chevron} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 5,
    paddingRight: 10,
  },
  teams: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamImage: {
    height: 15,
    width: 15,
    backgroundColor: '#B1B1B1',
    borderRadius: 50,
    marginRight: 8,
  },
  teamName: {
    fontWeight: '400',
    fontSize: 14,
  },
  teamRecord: {
    fontWeight: '300',
    fontSize: 10,
  },
  details: {
    flexDirection: 'row',
  },
  info: {
    flexDirection: 'column',
  },
  infoText: {
    fontSize: 10,
    textAlign: 'center',
  },
  chevronContainer: {
    justifyContent: 'center',
    marginLeft: 40,
  },
  chevron: {
    height: 15,
    width: 15,
    backgroundColor: '#B1B1B1',
  },
});
export default Matchups;
