import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectNearby} from '../../selectors/leagueSelector';
import {selectTeamByIdBulk} from '../../selectors/teamsSelector';

const RenderNearbyTeam = ({team}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.teamContainer}>
        <View style={styles.teamBadge} />
        <Text style={styles.name}>{team.name}</Text>
      </View>
      <View style={styles.requestContainer}>
        <Pressable>
          <Text style={styles.request}>Send an invite</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SearchTeams = () => {
  const nearbyTeamIds = useSelector(selectNearby);
  const teamModels = useSelector(selectTeamByIdBulk(nearbyTeamIds));
  console.log('teamModels', teamModels);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Invite teams nearby</Text>
        {nearbyTeamIds.length > 0 ? (
          teamModels.map(team => <RenderNearbyTeam team={team} key={team.id} />)
        ) : (
          <Text>No teams nearby</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0c0c0',
    paddingHorizontal: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamBadge: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '300',
  },
  request: {
    backgroundColor: '#7E7E7E',
    padding: 5,
    color: '#fff',
  },
  requestContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default SearchTeams;
