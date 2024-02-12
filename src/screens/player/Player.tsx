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
import usePlayerDetails from '../../hooks/usePlayerDetails';

const RenderPositions = ({sportPositions}) => {
  return sportPositions.map(sport => {
    return (
      <View style={styles.mainPositionContainer} key={sport.sport}>
        {/* <View style={styles.teamBadge} /> */}
        <Text style={styles.sport}>{sport.sport}</Text>
        <View style={styles.preferences}>
          {sport.positions.map(position => {
            return (
              <View style={styles.subPositionsContainer} key={position}>
                <Text style={styles.position}>{position}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  });
};

const RenderCurrentTeam = ({teams}) => {
  return (
    <View style={styles.teamsContainer} key={teams.name}>
      <View style={styles.teamBadge} />
      <Text style={styles.teamName}>{teams.name}</Text>
    </View>
  );
};

const Player = () => {
  const [message, setMessage] = useState('');
  const {player, team} = usePlayerDetails();
  const ViewingOtherPlayer = true;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={styles.badgeContainer}>
          {/* <Image /> */}
          <View style={styles.badge} />
        </View>
        <View style={styles.playerInformation}>
          <View>
            <Text style={[styles.centerText, styles.title]}>{player.name}</Text>
          </View>
        </View>
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
          <RenderCurrentTeam teams={team} />
        </Card>
        <Card title="Position preferences">
          <RenderPositions sportPositions={player.preferences} />
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
    flex: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: '#3E3E3E',
  },
  playerName: {
    fontSize: 20,
    marginBottom: 10,
  },
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sportsIcons: {
    height: 20,
    width: 20,
    backgroundColor: '#878787',
    borderRadius: 50,
    marginHorizontal: 2,
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
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 2,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginRight: 10,
  },
  sport: {
    fontSize: 16,
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
    fontSize: 16,
  },
  position: {
    fontSize: 14,
  },
  playerInfo: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  badgeContainer: {},
  badge: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#3E3E3E',
  },
  playerInformation: {},
  quickActionContainer: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  centerText: {
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 1,
  },
});

export default Player;
