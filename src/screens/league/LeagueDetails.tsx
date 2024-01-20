import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeIcon,
  BadgeText,
  Center,
  HStack,
  VStack,
} from '@gluestack-ui/themed';

const pillMessages = {
  NEED_TEAMS: 'recruit more teams',
  READY: 'ready',
};

const Pill = ({text, action}) => {
  return (
    <Badge size="sm" variant="outline" borderRadius="$full" action={action}>
      <BadgeText>{text}</BadgeText>
    </Badge>
  );
};

const LeagueDetailsTab = ({navigation, route}) => {
  const [accPills, setAccPills] = useState([]);
  const {item} = route.params;
  // if i need more pill categories
  // action	error | warning | success | info | muted
  const needTeams = item.teams.length < item.limit;
  const teamsFull = item.teams.length >= item.limit;
  useEffect(() => {
    // Logic to update accPills
    let updatedPills = [];

    if (needTeams) {
      updatedPills.push(
        <Pill key="needTeams" text={pillMessages.NEED_TEAMS} action="error" />,
      );
    }

    if (teamsFull) {
      updatedPills.push(
        <Pill key="teamsFull" text={pillMessages.READY} action="success" />,
      );
    }

    setAccPills(updatedPills);
  }, [needTeams, teamsFull]); // Dependencies to watch for changes
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
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.teams.length} teams</Text>
            <HStack>{accPills}</HStack>
          </VStack>
        </HStack>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252526',
    height: 150,
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
