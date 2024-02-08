import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const TeamForm = () => {
  const [teamInfo, setTeamInfo] = useState({
    name: '',
    location: '',
    skill: '',
    ageRange: '',
    type: '',
  });

  const route = useRoute();
  const navigation = useNavigation();
  const {sport} = route.params;

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
          <View style={styles.inputContainer}>
            <TextInput
              value={`${teamInfo.name}`}
              placeholder="League name"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  name: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={teamInfo.location}
              placeholder="Location"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  location: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={teamInfo.skill}
              placeholder="Skill level"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  skill: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={teamInfo.ageRange}
              placeholder="Player age range (optional)"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  ageRange: input,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={teamInfo.type}
              placeholder="Team Type"
              style={styles.input}
              multiline={false}
              underlineColorAndroid="transparent"
              onChangeText={input =>
                setTeamInfo({
                  ...teamInfo,
                  type: input,
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
