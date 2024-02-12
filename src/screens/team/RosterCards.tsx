import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import Card from '../../components/card/Card';
import {Divider} from 'react-native-paper';

export const TeamStaff = ({admins}) => {
  const displayAdmins = admins.map(admin => (
    <View key={admin.id} style={staffStyles.container}>
      <View style={staffStyles.image} />
      <View>
        <Text style={staffStyles.name}>{admin.name}</Text>
        <Text style={staffStyles.admin}>admin</Text>
      </View>
    </View>
  ));
  return <Card title="Team Staff">{displayAdmins}</Card>;
};

const PlayerFormat = ({name}) => {
  return (
    <TouchableHighlight
      style={squadStyles.playerContainer}
      onPress={() => console.log('player detail')}
      activeOpacity={0.9}
      underlayColor="#D9D9D9">
      <>
        <View style={squadStyles.teamBadge} />
        <Text style={squadStyles.name}>{name}</Text>
      </>
    </TouchableHighlight>
  );
};

const RenderEmpty = () => {
  return (
    <>
      <Divider style={squadStyles.divider} />
      <View style={squadStyles.emptyContainer}>
        <View style={squadStyles.add} />
        <Text style={squadStyles.inviteText}>Invite a player</Text>
      </View>
      <Divider style={squadStyles.divider} />
    </>
  );
};

export const Squad = ({playerModels, limit, bench}) => {
  // empty roster spots - NUMBER
  const emptySpots = limit - playerModels.length;

  //   player models in team
  const players = playerModels.map(player => (
    <PlayerFormat name={player.name} key={player.id} />
  ));

  //   player models in bench
  const benchPlayers = bench.map(player => (
    <PlayerFormat name={player.name} key={player.id} />
  ));

  //   render empty spots in UI if available
  const empty = [];
  for (let i = 0; i < emptySpots; i++) {
    empty.push(<RenderEmpty />);
  }

  return (
    <Card title="Squad" footerText="Recruit more players (free-agency)">
      <Text style={squadStyles.subCategory}>Registered</Text>
      {players}
      <Divider style={squadStyles.divider} />
      {empty}
      <Text style={squadStyles.subCategory}>Bench</Text>
      {benchPlayers}
    </Card>
  );
};

const squadStyles = StyleSheet.create({
  playerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingLeft: 10,
  },
  teamBadge: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  name: {
    fontWeight: '300',
  },
  subCategory: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 3,
  },
  inviteText: {
    color: '#A4A4A4',
  },
  add: {
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  emptyContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#C2C2C2',
  },
});

const staffStyles = StyleSheet.create({
  staffContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginVertical: 10,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  name: {
    fontWeight: '300',
  },
  admin: {
    color: '#A4A4A4',
  },
});
