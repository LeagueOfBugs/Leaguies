import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Center,
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import {useSelector} from 'react-redux';
import {selectLeagueById} from '../../selectors/leagueSelector';

interface PillProps {
  text: string;
  action: 'error' | 'warning' | 'success' | 'info' | 'muted';
}

const pillMessages = {
  NEED_TEAMS: 'recruit more teams',
  READY: 'ready',
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
  const league: League | undefined = useSelector(selectLeagueById(item.id));
  const needTeams = league?.teams?.length < league?.limit;
  const teamsFull = league?.teams?.length === league?.limit;
  return (
    <SafeAreaView style={styles.container}>
      <Center>
        <HStack space="md">
          <Avatar bg="rgba(0, 0, 0, 0)">
            {item.badge ? (
              <Image source={{uri: item.badge}} style={styles.avatarImage} />
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
            </HStack>
          </VStack>
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
