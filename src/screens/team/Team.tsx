import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import {NoStateTeam} from './NoStatesUi';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Team = () => {
  const navigation = useNavigation();

  const handleCreateTeam = () => {
    navigation.navigate('Sports Select');
  };

  const handleJoinTeam = () => {
    navigation.navigate('Search Teams');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <NoStateTeam />
        <View style={styles.actionContainer}>
          <Button mode="contained" onPress={handleCreateTeam}>
            CREATE A TEAM
          </Button>
          <Button mode="contained" onPress={handleJoinTeam}>
            JOIN A TEAM
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
  actionContainer: {
    height: 100,
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    paddingLeft: '20%',
    paddingRight: '20%',
    justifyContent: 'space-evenly',
  },
});

export default Team;
