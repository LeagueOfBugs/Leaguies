import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {FormInput} from '../../components/FormInput';

const LeagueForm = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {sport} = route.params;

  const [leagueInfo, setLeagueInfo] = useState({
    name: '',
    competition: '',
    type: '',
    visibility: true,
    limit: '',
    fee: 0,
    sport: sport,
    seasonId: '',
    teams: [],
    location: 'Binghamton NY',
    image: '/Users/andres/Desktop/leaguies/src/assets/badge1.png',
    badge: '/Users/andres/Desktop/leaguies/src/assets/badge1.png',
    admin: [],
  });

  const handleContinue = () => {
    navigation.navigate('League Logo', {sport: sport, league: leagueInfo});
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
        <View>
          <View style={styles.wrapper}>
            <FormInput>
              <TextInput
                value={`${leagueInfo.name}`}
                placeholder="Name"
                onChangeText={input =>
                  setLeagueInfo({
                    ...leagueInfo,
                    name: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                value={leagueInfo.location}
                placeholder="Location"
                onChangeText={input =>
                  setLeagueInfo({
                    ...leagueInfo,
                    location: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                value={leagueInfo.competition}
                placeholder="Competition"
                onChangeText={input =>
                  setLeagueInfo({
                    ...leagueInfo,
                    competition: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                value={leagueInfo.type}
                placeholder="League type"
                onChangeText={input =>
                  setLeagueInfo({
                    ...leagueInfo,
                    type: input,
                  })
                }
              />
            </FormInput>
          </View>
          <Text style={styles.segment}>Preferences</Text>
          <View style={styles.wrapper}>
            {/*
  Change input to num
            */}
            <FormInput>
              <TextInput
                value={`${leagueInfo.visibility}`}
                placeholder="Visibility"
                onChangeText={() =>
                  setLeagueInfo({
                    ...leagueInfo,
                    visibility: true,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                value={leagueInfo.limit}
                placeholder="Number of teams"
                onChangeText={input =>
                  setLeagueInfo({
                    ...leagueInfo,
                    limit: input,
                  })
                }
              />
            </FormInput>
            {/*
  Change input to num
            */}
            <FormInput>
              <TextInput
                value={`${leagueInfo.fee}`}
                placeholder="Team fee"
                onChangeText={() =>
                  setLeagueInfo({
                    ...leagueInfo,
                    fee: 45,
                  })
                }
              />
            </FormInput>
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
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 3,
    width: '80%',
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
  wrapper: {
    marginHorizontal: 25,
  },
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
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '500',
    marginVertical: 20,
  },
});

export default LeagueForm;
