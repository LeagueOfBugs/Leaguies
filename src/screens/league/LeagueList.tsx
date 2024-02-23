import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {memo} from 'react';
import Fab from '../../components/Fab';
import CreateLeagueIterables from '../../components/CreateLeagueIterables';

const LeagueList = ({leagues, player}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>MY LEAGUES</Text>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <CreateLeagueIterables leagues={leagues} player={player} />
        </View>
      </ScrollView>
      <Fab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scroll: {},
  title: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: '500',
  },
  safe: {
    flex: 1,
  },
});

export default memo(LeagueList);
