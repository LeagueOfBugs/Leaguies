import {View, Text, StyleSheet} from 'react-native';
import React, { memo } from 'react';
import Card from './Card';
import {format} from 'date-fns';

const Rule = ({title, value}) => {
  return (
    <View style={styles.rule}>
      <View style={styles.image} />
      <View style={styles.ruleContainers}>
        <Text style={styles.title}>{title}: </Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
const SeasonDetails = ({season}) => {
  console.log('in season details');
  const seasonStart = new Date(season.start);
  const seasonEnd = new Date(season.end);

  const formatDate = date => {
    return format(date, 'MM/dd/yyyy');
  };
  return (
    <>
      <Card title="Season Details">
        <View style={styles.container}>
          <View style={styles.catContainers}>
            <Text style={styles.categories}>General</Text>
            <Rule title="Location" value={season.location} />
            <Rule title="Start" value={formatDate(seasonStart)} />
            <Rule title="End" value={formatDate(seasonEnd)} />
            <Rule title="Fee" value={`$${season.fee}`} />
            <Rule title="Cadence" value={season.cadence} />
            <Rule title="Level" value={season.skill} />
          </View>
          <View style={styles.catContainers}>
            <Text style={styles.categories}>Matches</Text>
            <Rule title="Teams" value={season.teams} />
            <Rule title="Matches" value={season.games} />
          </View>
          <View style={styles.catContainers}>
            <Text style={styles.categories}>Post Season</Text>
            <Rule title="Winners" value={season.winners} />
            <Rule title="Prize" value={`$${season.cashPrize}`} />
            <Rule title="Post-season Games" value={season.postSeasonGames} />
          </View>
        </View>
      </Card>
      <Card title="Postseason details">
        <Text>Post season management here</Text>
      </Card>
      <Card title="Upcoming seasons">
        <Text>Create future seasons</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  categories: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 3,
  },
  catContainers: {},
  ruleContainers: {
    flexDirection: 'row',
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {},
  value: {
    color: '#535353',
  },
});
export default memo(SeasonDetails);
