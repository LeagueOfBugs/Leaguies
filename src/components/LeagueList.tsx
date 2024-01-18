import {FlatList, StyleSheet, View} from 'react-native';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';

interface LeagueListProps {
  leagues: League[];
}

const LeagueList = ({leagues}: LeagueListProps) => {
  const isLeagueEmpty = leagues.length > 0;
  const renderLeagues = () => {
    return (
      <FlatList
        data={leagues}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.leagueContainer}>
            <View style={styles.wrapper}>
              <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
                <AvatarFallbackText>{item.name}</AvatarFallbackText>
                <AvatarImage />
              </Avatar>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text>{item.teams.length} / 10</Text>
          </View>
        )}
      />
    );
  };

  const render = () => {
    const noLeagues = <Heading>No Leagues</Heading>;
    return isLeagueEmpty ? renderLeagues() : noLeagues;
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Active Leagues</Heading>
      {render()}
    </View>
  );
};

export default LeagueList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  leagueContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  name: {
    paddingLeft: 10,
  },
  leagueInfo: {
    flex: 1,
  },
});
