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
    case 'rules':
      const recordTitle = 'No Rules';
      const recordMessage =
        'Once your start playing some games, You can view league performance and statistics.';
      return messageStructure(recordTitle, recordMessage);
    case 'season':
      const rosterTitle = 'No Active Season';
      const rosterMessage =
        'Create a season for your league and start playing games.';

      return messageStructure(rosterTitle, rosterMessage);
    case 'teams':
      const activityTitle = 'No Teams';
      const activityMessage =
        'Search and invite teams to participate in your current season. Send a team captain a request to join your league.';

      return messageStructure(activityTitle, activityMessage);
    case 'schedule':
      const scheduleTitle = 'No Schedule';
      const scheduleMessage =
        'Create a league to get started scheduling your games.';

      return messageStructure(scheduleTitle, scheduleMessage);
    case 'league':
      const leagueTitle = 'No League';
      const leagueMessage =
        'Join or create a league to get started. Choose the sport you are looking for and the choice is yours. Or something like that.';

      return messageStructure(leagueTitle, leagueMessage);

    default:
      return null;
  }
};

export const NoStateRules = () => {
  const tab = 'rules';
  return <View>{EmptyStateMessage(tab)}</View>;
};

export const NoStateSeason = () => {
  const tab = 'season';
  return <View>{EmptyStateMessage(tab)}</View>;
};

export const NoStateTeams = () => {
  const tab = 'teams';
  return <View>{EmptyStateMessage(tab)}</View>;
};

export const NoStateSchedule = () => {
  const tab = 'schedule';
  return <View>{EmptyStateMessage(tab)}</View>;
};
export const NoStateLeague = () => {
  const tab = 'league';
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
