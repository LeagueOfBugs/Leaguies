import {View, StyleSheet} from 'react-native';
import {createSelector} from 'reselect';
import {useSelector} from 'react-redux';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Text,
} from '@gluestack-ui/themed';
import Swiper from 'react-native-swiper';
import React from 'react';

const selectPlayers = (state: RootState) => state.players;

export const selectFreeAgentPlayers = createSelector(
  [selectPlayers],
  players => {
    const playersArray = players.players;
    const freeAgents = playersArray.filter(
      player => player.agency === 'freeAgent',
    );
    return freeAgents;
  },
);

const LFP = () => {
  const freeAgentPlayers = useSelector(selectFreeAgentPlayers);
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Players looking for teams</Heading>
      <Swiper showsPagination loop={false} style={styles.swiperContainer}>
        {freeAgentPlayers.map(player => (
          <View key={player.id} style={styles.playerContainer}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>{player.name}</AvatarFallbackText>
              <AvatarImage />
            </Avatar>
            <Heading>{player.name}</Heading>
            <Text>{player.position}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 230,
    margin: 0,
  },
  swiperContainer: {
    height: '100%',
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 20,
  },
  playerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '80%',
  },
});
export default LFP;
