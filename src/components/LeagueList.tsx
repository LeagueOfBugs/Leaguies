import {FlatList, Pressable, StyleSheet, View} from 'react-native';
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

const LeagueList = ({leagues, navigation}: LeagueListProps) => {
  const isLeagueEmpty = leagues.length > 0;
  const renderLeagues = () => {
    return (
      <FlatList
        data={leagues}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <>
            <Pressable
              style={styles.leagueContainer}
              onPress={() => {
                navigation.navigate('League Details', {item: item});
              }}>
              <View style={styles.wrapper}>
                <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
                  <AvatarFallbackText>{item.name}</AvatarFallbackText>
                  <AvatarImage />
                </Avatar>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text style={{color: 'white'}}>
                {item.teams.length} / {item.limit}
              </Text>
            </Pressable>
          </>
        )}
      />
    );
  };

  const render = () => {
    const noLeagues = <Heading>No Leagues</Heading>;
    return isLeagueEmpty ? renderLeagues() : noLeagues;
  };

  return <View style={styles.container}>{render()}</View>;
};

export default LeagueList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  leagueContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  name: {
    paddingLeft: 10,
    color: '#ffffff',
  },
  leagueInfo: {
    flex: 1,
  },
});
