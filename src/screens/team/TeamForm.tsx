import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {FormInput} from '../../components/FormInput';

const TeamForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {sport} = route.params;

  const [teamInfo, setTeamInfo] = useState({
    name: '',
    location: '',
    skill: '',
    ageRange: '',
    type: '',
    limit: '',
    visibility: '',
    sport: sport,
  });

  const handleContinue = () => {
    navigation.navigate('Team Logo', {sport: sport, team: teamInfo});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.steps}>Step 2 of 3</Text>
        <Text
          style={
            styles.title
          }>{`Your ${sport.toLowerCase()} team information`}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.information}>
          <FormInput>
            <TextInput
              value={`${teamInfo.name}`}
              placeholder="Team name"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  name: input,
                })
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              value={teamInfo.location}
              placeholder="Location"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  location: input,
                })
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              value={teamInfo.skill}
              placeholder="Skill level"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  skill: input,
                })
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              value={teamInfo.ageRange}
              placeholder="Player age range (optional)"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  ageRange: input,
                })
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              value={teamInfo.type}
              placeholder="Team Type"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  type: input,
                })
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              // value={`${teamInfo.limit}`}
              placeholder="Team size"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  limit: input,
                })
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              value={teamInfo.visibility}
              placeholder="Team visibility"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  visibility: input,
                })
              }
            />
          </FormInput>
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
});

export default TeamForm;
