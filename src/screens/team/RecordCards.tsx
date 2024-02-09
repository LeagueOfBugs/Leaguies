import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../../components/card/Card';

export const Seasons = ({current, past, leagueName}) => {
  return (
    <Card title="Seasons">
      <View style={seasonStyles.container}>
        <Text style={seasonStyles.categories}>Current</Text>
        <View style={seasonStyles.subContainer}>
          <View style={seasonStyles.badge} />
          <View style={seasonStyles.textContainer}>
            <Text style={seasonStyles.name}>{current.name}</Text>
            <Text style={seasonStyles.league}>League: {leagueName}</Text>
          </View>
        </View>
      </View>
      <Text style={seasonStyles.categories}>Participated</Text>
      <View style={seasonStyles.participated}>
        <Text style={seasonStyles.lowPrioText}>No other leagues available</Text>
      </View>
    </Card>
  );
};

const seasonStyles = StyleSheet.create({
  container: {},
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  textContainer: {},
  categories: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 3,
  },
  badge: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
  league: {
    fontWeight: '300',
  },
  participated: {
    padding: 10,
    alignItems: 'center',
  },
  lowPrioText: {
    color: '#A4A4A4',
  },
});

export const Showcase = () => {
  return (
    <Card title="Showcase">
      <View style={showcaseStyles.container}>
        <Text style={showcaseStyles.noStateText}>No winnings available</Text>
      </View>
    </Card>
  );
};

const showcaseStyles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  noStateText: {
    color: '#A4A4A4',
  },
});
