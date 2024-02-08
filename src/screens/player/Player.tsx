import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import Card from '../../components/card/Card';

const sportsExample = [
  {
    sport: 'Soccer',
    positions: ['Attacking center mid', 'Right winger', 'Left winger'],
  },
  {sport: 'Football', positions: ['Runnin back', 'Wide receiver']},
  {
    sport: 'Volleyball',
    positions: ['Setter', 'Outside hitter', 'Defensive specialist'],
  },
];

const teamExamples = [
  {name: 'Team Name Here 1', badge: ''},
  {name: 'Team Name Here 2', badge: ''},
];

const RenderPositions = () => {
  return sportsExample.map(sport => {
    return (
      <View style={styles.mainPositionContainer} key={sport.sport}>
        {/* <View style={styles.teamBadge} /> */}
        <Text style={styles.sport}>{sport.sport}</Text>
        <View style={styles.preferences}>
          {sport.positions.map(position => {
            return (
              <View style={styles.subPositionsContainer} key={position}>
                <Text>{position}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  });
};

const RenderCurrentTeam = () => {
  return teamExamples.map(team => {
    return (
      <View style={styles.teamsContainer} key={team.name}>
        <View style={styles.teamBadge} />
        <Text style={styles.teamName}>{team.name}</Text>
      </View>
    );
  });
};

const Player = () => {
  const [message, setMessage] = useState('');
  const ViewingOtherPlayer = true;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={styles.avatar} />
        <Text style={styles.playerName}>Player Name</Text>
        <View style={styles.sportsContainer}>
          <View style={styles.sportsIcons} />
          <View style={styles.sportsIcons} />
          <View style={styles.sportsIcons} />
        </View>
        {/* setting button or an action button with Edit Profile text */}
        {/* <View>
          <Button>Edit Profile</Button>
        </View> */}
      </View>
      <ScrollView>
        {ViewingOtherPlayer && (
          <View style={styles.invite}>
            <View style={styles.inputContainer}>
              <TextInput
                value={message}
                placeholder="Join our Soccer squad"
                style={styles.input}
                onChangeText={setMessage}
              />
            </View>
            <View style={styles.actionContainer}>
              <Button>Send request</Button>
              <View>
                {/* icon image goes here */}
                <View style={styles.icon} />
              </View>
            </View>
          </View>
        )}
        <Card title="Teams" footerText="see player history">
          <RenderCurrentTeam />
        </Card>
        <Card title="Position preferences">
          <RenderPositions />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#C0c0c0',
  },
  playerContainer: {
    maxHeight: 250,
    minHeight: 250,
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#3E3E3E',
  },
  playerName: {
    fontSize: 25,
  },
  sportsContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 200,
  },
  sportsIcons: {
    height: 40,
    width: 40,
    backgroundColor: '#878787',
    borderRadius: 50,
  },
  invite: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#878787',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    minWidth: 200,
    maxWidth: 220,
  },
  input: {
    color: '#000',
  },
  preferences: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  mainPositionContainer: {},
  subPositionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginRight: 10,
  },
  sport: {
    fontSize: 18,
    marginVertical: 10,
  },
  teamBadge: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  teamName: {
    fontSize: 18,
  },
});

export default Player;
