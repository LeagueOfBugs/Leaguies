import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';

interface LeagueListProps {
  leagues: League[];
  navigation: any;
}

const LeagueList = ({leagues, navigation}: LeagueListProps) => {
  const isLeagueEmpty = leagues.length > 0;
  // console.log('leagues', leagues);
  return (
    <FlatList
      data={leagues}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        // console.log('item: ',item);
        return (
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
        );
      }}
    />
  );
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
