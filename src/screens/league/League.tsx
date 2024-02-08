import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NoStateLeague} from './NoStatesUi';
import {useNavigation} from '@react-navigation/native';

const League = () => {
  const navigation = useNavigation();
  const handleCreateLeague = () => {
    navigation.navigate('Sports Select');
  };
  const handleJoinLeague = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <NoStateLeague />
        <View style={styles.actionContainer}>
          <Button mode="contained" onPress={handleCreateLeague}>
            CREATE A LEAGUE
          </Button>
          <Button mode="contained" onPress={handleJoinLeague}>
            JOIN A LEAGUE
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
    backgroundColor: '#C0c0c0',
  },
});

export default League;
