import {StyleSheet} from 'react-native';
import React from 'react';
import {View, Heading, Text} from '@gluestack-ui/themed';

const LeagueGame = ({gameName, date, time, location, homeTeam, awayTeam}) => {
  return (
    <View>
      <View>
        <Heading>Game Name{gameName}</Heading>
      </View>
      <View>
        <Text style={styles.text}>Date: {date}</Text>
        <Text style={styles.text}>Time: {time}</Text>
        <Text style={styles.text}>Location: {location}</Text>
        <Text style={styles.text}>Home team: {homeTeam}</Text>
        <Text style={styles.text}>Away team: {awayTeam}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: '#fff',
  },
});

export default LeagueGame;
