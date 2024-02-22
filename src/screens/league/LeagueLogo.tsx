import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import useLeagueDispatch from '../../hooks/useLeagueDispatch';
/* 
TODO:
Choose one from a range of badges
it will be the icon displays
more customization
*/
const LeagueLogo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {sport, league} = route.params;
  const {addLeague} = useLeagueDispatch();
  const handleContinue = () => {
    navigation.navigate('League List');
    // create team
    addLeague(league);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.steps}>Step 3 of 3</Text>
        <Text
          style={
            styles.title
          }>{`Select a logo for your ${sport.toLowerCase()} league`}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.logo}>
          <View style={styles.alignCenter}>
            <View style={styles.image} />
            <Text>Default</Text>
          </View>
          <Button mode="outlined">choose from gallery</Button>
        </View>

        <View style={styles.actionContainer}>
          <Button mode="contained" onPress={handleContinue}>
            CREATE LEAGUE
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
    alignItems: 'center',
    marginBottom: 40,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    marginBottom: 3,
    width: '70%',
  },
  steps: {
    color: '#808080',
    marginBottom: 3,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  information: {
    paddingLeft: 35,
    paddingRight: 35,
  },
  categoryTitle: {},
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 'auto',
    fontSize: 20,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 250,
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export default LeagueLogo;
