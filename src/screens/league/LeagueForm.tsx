import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const LeagueForm = () => {
  const [leagueInfo, setLeagueInfo] = useState({
    name: '',
    competition: '',
    type: '',
    Visibility: '',
    teams: '',
    fee: '',
  });

  const route = useRoute();
  const navigation = useNavigation();
  const {sport} = route.params;

  const handleContinue = () => {
    console.log(leagueInfo);
    navigation.navigate('League Logo', {sport: sport, team: leagueInfo});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.steps}>Step 2 of 3</Text>
        <Text
          style={
            styles.title
          }>{`Enter your ${sport.toLowerCase()} league information`}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.information}>
          <View style={styles.inputContainer}>
            <TextInput
              value={`${leagueInfo.name}`}
              placeholder="League name"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setLeagueInfo({
                  ...leagueInfo,
                  name: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={leagueInfo.competition}
              placeholder="Competition"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setLeagueInfo({
                  ...leagueInfo,
                  competition: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={leagueInfo.type}
              placeholder="League type"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setLeagueInfo({
                  ...leagueInfo,
                  type: input,
                })
              }
            />
          </View>
          <Text style={styles.segment}>Preferences</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={leagueInfo.Visibility}
              placeholder="Visibility"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setLeagueInfo({
                  ...leagueInfo,
                  Visibility: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={leagueInfo.teams}
              placeholder="Number of teams"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setLeagueInfo({
                  ...leagueInfo,
                  teams: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={leagueInfo.fee}
              placeholder="Team fee"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setLeagueInfo({
                  ...leagueInfo,
                  fee: input,
                })
              }
            />
          </View>
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
    marginBottom: 30,
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
    height: 20,
    width: 20,
    backgroundColor: 'black',
    marginRight: 10,
  },
  information: {
    // paddingLeft: 35,
    // paddingRight: 35,
  },
  categoryTitle: {},
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 35,
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 'auto',
    fontSize: 20,
  },
  segment: {
    fontSize: 30,
    marginLeft: 20,
  },
});

export default LeagueForm;
