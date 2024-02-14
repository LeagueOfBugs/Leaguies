import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Card from './Card';
import useExtractTeams from '../../hooks/useExtractTeams';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const TeamStructure = ({name, wins, loss}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{name}</Text>
        <Text style={styles.record}>
          ({wins}-{loss})
        </Text>
      </View>
    </View>
  );
};
const recommendedTeamsStructure = ({name}) => {
  return (
    <View>
      <View style={styles.image} />
      <Text>{name}</Text>
    </View>
  );
};

const RenderEmpty = ({handleTeamInvite}) => {
  return (
    <>
      <Divider style={styles.divider} />
      <Pressable
        style={styles.emptyContainer}
        onPress={() => handleTeamInvite()}>
        <View style={styles.add} />
        <Text style={styles.inviteText}>Invite a team</Text>
      </Pressable>
      <Divider style={styles.divider} />
    </>
  );
};

const RegisteredTeams = ({teams, limit}) => {
  const navigation = useNavigation();
  const teamModels = useExtractTeams(teams);
  const emptySpots = limit - teams.length;
  const handleTeamInvite = () => {
    navigation.navigate('Search Teams');
  };
  const empty = [];
  for (let i = 0; i < emptySpots; i++) {
    empty.push(<RenderEmpty key={i} handleTeamInvite={handleTeamInvite} />);
  }
  const renderTeams = teamModels.map(team => {
    const [wins, loss] = team.record;
    return (
      <TeamStructure name={team.name} wins={wins} loss={loss} key={team.id} />
    );
  });

  return (
    <Card title="Registered Teams">
      <View style={styles.mainContainer}>
        <Text style={styles.name}>Registered Teams</Text>
        {renderTeams}
        <Divider style={styles.divider} />
        {empty}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 10,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 3,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  record: {
    color: '#A4A4A4',
  },
  teamName: {
    marginRight: 5,
    fontWeight: '300',
  },
  divider: {
    backgroundColor: '#C2C2C2',
  },
  emptyContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  inviteText: {
    color: '#A4A4A4',
  },
});
export default RegisteredTeams;
