import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Button,
  ButtonText,
  Center,
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import {useSelector} from 'react-redux';
import {selectLeagueById, selectLeagues} from '../../selectors/leagueSelector';
import useLeagueDispatch from '../../hooks/useLeagueDispatch';
import {selectTeams} from '../../selectors/teamsSelector';
import {selectPlayers} from '../../selectors/playerSelectors';

interface PillProps {
  text: string;
  action: 'error' | 'warning' | 'success' | 'info' | 'muted';
}

const pillMessages = {
  NEED_TEAMS: 'recruit more teams',
  READY: 'ready',
  NO_SEASON: 'no season',
};

const Pill = ({text, action}: PillProps) => {
  return (
    <Badge size="sm" variant="outline" borderRadius="$full" action={action}>
      <BadgeText>{text}</BadgeText>
    </Badge>
  );
};

const LeagueDetailsTab = ({navigation, route}) => {
  const {item} = route.params;

  let leagueId: string;
  if (typeof item === 'object') {
    leagueId = item.id;
  } else {
    leagueId = item;
  }

  const {deleteLeague} = useLeagueDispatch();
  const {leagues} = useSelector(selectLeagues);
  const {teams} = useSelector(selectTeams);

  const league: League = useSelector(selectLeagueById(leagueId));
  const {players} = useSelector(selectPlayers);

  const needTeams = league?.teams?.length < parseInt(league?.limit, 10);
  const teamsFull = league?.teams?.length >= parseInt(league?.limit, 10);
  console.log('season id:', league.seasonId);
  const activeSeason = league?.seasonId.length > 0;

  // TODO: handle this in league dispatcher for side effects
  const handleDelete = () => {
    deleteLeague(league?.id, leagues, teams, players, navigation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Center>
        <HStack space="4xl">
          <Center>
            <HStack space="md">
              <Avatar bg="rgba(0, 0, 0, 0)">
                {league.badge ? (
                  <Image
                    source={{uri: league.badge}}
                    style={styles.avatarImage}
                  />
                ) : (
                  <AvatarFallbackText>{item.name}</AvatarFallbackText>
                )}
              </Avatar>
              <VStack>
                <Text style={styles.text}>{league?.name}</Text>
                <Text style={styles.text}>{league?.teams.length} teams</Text>
                <HStack>
                  {needTeams && (
                    <Pill
                      key="needTeams"
                      text={pillMessages.NEED_TEAMS}
                      action="error"
                    />
                  )}
                  {teamsFull && (
                    <Pill
                      key="teamsFull"
                      text={pillMessages.READY}
                      action="success"
                    />
                  )}
                  {!activeSeason && (
                    <Pill
                      key="activeSeason"
                      text={pillMessages.NO_SEASON}
                      action="error"
                    />
                  )}
                </HStack>
              </VStack>
            </HStack>
          </Center>
          <Button
            size="sm"
            variant="outline"
            action="negative"
            onPress={() => handleDelete()}>
            <ButtonText>Delete League</ButtonText>
          </Button>
        </HStack>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252526',
    height: 100,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    color: '#ffffff',
  },
});

export default LeagueDetailsTab;
