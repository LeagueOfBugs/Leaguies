import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

// move out of this file
const sports = [
  {
    name: 'Baseball',
    image: '',
  },
  {name: 'Basketball', image: ''},
  {name: 'Football', image: ''},
  {name: 'Soccer', image: ''},
  {name: 'Tennis', image: ''},
  {name: 'Volleyball', image: ''},
  {name: 'e-sports', image: ''},
  {name: 'Golf', image: ''},
  {name: 'Softball', image: ''},
  {name: 'Bowling', image: ''},
  {name: 'Hockey', image: ''},
  {name: 'Other', image: ''},
];

const TeamSportsSelect = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  const handleSportSelection = (sport: string) => {
    setSelected(sport);
  };

  const handleContinue = () => {
    navigation.navigate('Team Form', {sport: selected});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.steps}>Step 1 of 3</Text>
        <Text style={styles.title}>Select your sport</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.sportsContainer}>
          {sports.map(sport => (
            <Pressable
              style={styles.elementContainer}
              key={sport.name}
              onPress={() => handleSportSelection(sport.name)}>
              {/* <Image source={{uri: sport.image}} style={styles.image} /> */}
              <View style={styles.image} />
              <Text style={styles.name}>{sport.name}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.actionContainer}>
          <Button mode="contained" onPress={handleContinue}>
            CONTINUE
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0c0c0',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    width: '70%',
    marginBottom: 3,
  },
  sportsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    alignSelf: 'center',
  },
  elementContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
    padding: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  image: {
    height: 30,
    width: 30,
    backgroundColor: '#5F5F5F',
    borderRadius: 50,
  },
  actionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
  },
  steps: {
    color: '#808080',
  },
});

export default TeamSportsSelect;
