import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const messageStructure = (title: string, message: string) => (
  <View style={styles.container}>
    <Text style={[styles.centerText, styles.title]}>{title}</Text>
    <Text style={[styles.centerText, styles.message]}>{message}</Text>
  </View>
);

const EmptyStateMessage = (tab: string) => {
  switch (tab) {
    case 'record':
      const recordTitle = 'No Record';
      const recordMessage =
        'Once your start playing some games, You can view team performance and statistics.';
      return messageStructure(recordTitle, recordMessage);
    case 'roster':
      const rosterTitle = 'No Roster';
      const rosterMessage =
        'Invite your teammates or search for free agents looking for teams.';

      return messageStructure(rosterTitle, rosterMessage);
    case 'activity':
      const activityTitle = 'No Activity';
      const activityMessage =
        'Everything from new players to joining leagues, we will keep a record of your team management here.';

      return messageStructure(activityTitle, activityMessage);
    case 'team':
      const teamTitle = 'No Team';
      const teamMessage =
        'Join or create a team to get started. Choose the sport you are looking for and the choice is yours. or something like that.';

      return messageStructure(teamTitle, teamMessage);

    default:
      return null;
  }
};

export const NoStateRecord = () => {
  const tab = 'record';
  return <View>{EmptyStateMessage(tab)}</View>;
};

export const NoStateRoster = () => {
  const tab = 'roster';

  return <View>{EmptyStateMessage(tab)}</View>;
};

export const NoStateActivity = () => {
  const tab = 'activity';

  return <View>{EmptyStateMessage(tab)}</View>;
};

export const NoStateTeam = () => {
  const tab = 'team';

  return <View>{EmptyStateMessage(tab)}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
  },
  message: {
    fontSize: 20,
    fontWeight: '300',
  },
});
