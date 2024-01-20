import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {selectFreeAgentPlayers} from '../selectors/playerSelectors';

interface CardProps {
  name: string;
  imageUrl: string;
  position: string;
}

interface PlayerItem {
  id: string;
  name: string;
  image: string;
  position: string;
}

const Card = ({name, imageUrl, position}: CardProps) => {
  return (
    <View style={styles.card}>
      <Avatar>
        <AvatarFallbackText>{name}</AvatarFallbackText>
        <AvatarImage source={imageUrl} alt={name} />
        <AvatarBadge />
      </Avatar>
      <View style={styles.playerInfo}>
        <Text style={styles.cardText}>{name}</Text>
        <Text style={styles.cardText}>{position}</Text>
      </View>
    </View>
  );
};

const LFP = () => {
  const freeAgentPlayers = useSelector(selectFreeAgentPlayers);
  const renderItem = ({item}: {item: PlayerItem}) => (
    <Card name={item.name} imageUrl={item.image} position={item.position} />
  );

  return (
    <>
      <Heading style={styles.title}>Players Looking for Teams</Heading>
      <ScrollView style={styles.scrollView}>
        <View>
          <FlatList
            data={freeAgentPlayers}
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
export default LFP;
