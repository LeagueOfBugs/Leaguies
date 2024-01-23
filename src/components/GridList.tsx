import {Heading, ScrollView, Text} from '@gluestack-ui/themed';
import React from 'react';
import {View, StyleSheet, Image, FlatList, Pressable} from 'react-native';

interface CardProps {
  name: string;
  imageUrl: string;
  navigation: any;
  item: League;
}

interface LeagueItem {
  id: string;
  badge: string;
  name: string;
  item: League;
  limit: string;
}

interface GridListProps {
  allLeagues: LeagueItem[];
  navigation: any;
}

const Card = ({name, imageUrl, navigation, item}: CardProps) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('League Details', {item: item})}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.cardText}>{name}</Text>
    </Pressable>
  );
};

const GridList = ({allLeagues, navigation}: GridListProps) => {
  if (!allLeagues) {
    return <Text>Loading...</Text>;
  }

  const renderItem = ({item}: {item: LeagueItem}) => (
    <Card
      name={item.name}
      imageUrl={item.badge}
      navigation={navigation}
      item={item}
    />
  );

  return (
    <>
      <Heading style={styles.title} onPress={() => console.log('heading')}>
        Leagues
      </Heading>
      <ScrollView style={styles.scrollView}>
        <View style={styles.gridContainer}>
          <FlatList
            data={allLeagues}
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
    maxHeight: 150,
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
  },
  gridContainer: {},
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 8,
  },
  row: {
    margin: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});

export default GridList;
