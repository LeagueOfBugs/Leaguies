import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const TeamRanking = ({teamName}) => {
  return (
    <View style={[styles.row, styles.container]}>
      <View style={[styles.subContainerLeft, styles.row]}>
        <Text style={styles.posText}>1</Text>
        <View style={styles.flexHalf}>
          <Image
            style={styles.rankImage}
            src="/Users/andres/Desktop/leaguies/src/assets/rankings/ranking_down.png"
          />
        </View>
        <View style={[styles.row, styles.teamContainer, styles.team]}>
          <View style={styles.teamLogo}>
            <Image
              src="/Users/andres/Desktop/leaguies/src/assets/test/barcelona.png"
              style={{height: 20, width: 20}}
            />
          </View>
          <Text>{teamName}</Text>
        </View>
      </View>
      <View style={[styles.subContainerRight, styles.row]}>
        <Text style={styles.record}>10</Text>
        <Text style={styles.record}>1</Text>
        <Text style={styles.record}>2</Text>
        <Text style={styles.record}>20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 10,
  },
  subContainerLeft: {
    flex: 1.5,
    alignItems: 'center',
  },
  subContainerRight: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  posText: {flex: 1, textAlign: 'center'},
  rankImage: {
    height: 10,
    width: 10,
  },
  record: {
    flex: 1,
    textAlign: 'center',
  },
  team: {
    alignItems: 'center',
  },
  teamLogo: {
    marginRight: 4,
  },
  flexHalf: {
    flex: 0.5,
  },
  teamContainer: {
    flex: 3,
  },
});

export default TeamRanking;
