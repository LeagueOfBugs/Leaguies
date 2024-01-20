import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
} from '@gluestack-ui/themed';

import React from 'react';
import {selectIncompleteTeams} from '../selectors/teamsSelector';

interface CardProps {
  name: string;
  imageUrl: string;
  playersNeeded: number;
}

interface PlayerItem {
  id: string;
  name: string;
  image: string;
  players: string[];
  playersNeeded?: number;
}

const Card = ({name, imageUrl, playersNeeded}: CardProps) => {
  return (
    <View style={styles.card}>
      <Avatar>
        <AvatarFallbackText>{name}</AvatarFallbackText>
        <AvatarImage source={imageUrl} alt={name} />
      </Avatar>
      <View style={styles.playerInfo}>
        <Text style={styles.cardText}>{name}</Text>
        <Text style={styles.cardText}>{playersNeeded} / 6</Text>
      </View>
    </View>
  );
};

const LFT = () => {
  const incompleteTeams = useSelector(selectIncompleteTeams);
  const renderItem = ({item}: {item: PlayerItem}) => {
    return (
      <Card
        name={item.name}
        imageUrl={item.image}
        playersNeeded={item.players.length}
      />
    );
  };

  return (
    <>
      <Heading style={styles.title}>Teams Looking for Players</Heading>
      <ScrollView style={styles.scrollView}>
        <View>
          <FlatList
            data={incompleteTeams}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={4}
            columnWrapperStyle={styles.row}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 250,
  },
  playerInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 300,
    margin: 0,
  },
  swiperContainer: {
    height: '100%',
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 20,
    paddingLeft: 5,
    margin: 10,
  },
  card: {
    width: 80,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 10,
  },
  playerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '80%',
  },
  row: {
    margin: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});

export default LFT;
