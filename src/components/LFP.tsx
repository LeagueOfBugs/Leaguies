import {View, StyleSheet, ScrollView, FlatList, Pressable} from 'react-native';
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
  navigation: any;
  item: Player;
}

interface PlayerItem {
  id: string;
  name: string;
  image: string;
  position: string;
}

const Card = ({item, navigation}: CardProps) => {
  let itemId = item.id;
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Player Details', {itemId})}>
      <Avatar>
        <AvatarFallbackText>{item.name}</AvatarFallbackText>
        <AvatarImage source={item.image} alt={item.name} />
        {item.onlineStatus && <AvatarBadge />}
        {!item.onlineStatus && <AvatarBadge style={styles.offline} />}
      </Avatar>
      <View style={styles.playerInfo}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.cardText}>{item.position}</Text>
      </View>
    </Pressable>
  );
};

const LFP = ({navigation}: any) => {
  const freeAgentPlayers = useSelector(selectFreeAgentPlayers);
  const renderItem = ({item}: {item: PlayerItem}) => (
    <Card item={item} navigation={navigation} />
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
    color: '#ffffff',
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
  offline: {
    backgroundColor: 'red',
  },
});
export default LFP;
