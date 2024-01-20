import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectTeams} from '../../selectors/teamsSelector';
import SectionContainer from '../../components/SectionContainer';
import {
  AddIcon,
  Avatar,
  AvatarFallbackText,
  Center,
  HStack,
  Icon,
  TrashIcon,
  VStack,
  CircleIcon,
} from '@gluestack-ui/themed';
import {deleteTeamFromLeagueUpdate} from '../../utils';

const LeagueTeamsTab = ({navigation, route}) => {
  const {item} = route.params;
  const teamIds = item.teams;
  const dispatch = useDispatch();
  const {teams} = useSelector((state: RootState) => selectTeams(state));
  const leagueTeams = teams.filter(
    team => teamIds.includes(team.id) && team.active === true,
  );
  const otherTeams = teams.filter(
    team => !teamIds.includes(team.id) && team.league === '',
  );
  const activityFalse = teams.filter(team => !team.active);

  const renderItem = ({item}) => {
    const [wins, loss] = item.record;
    const icons = [];
    const limit = 5;
    const ICON_HEIGHT = '$2';
    const ICON_WIDTH = '$2';
    const ICON_M = '$1.5';

    // Display up to 5 icons for wins (green)
    for (let i = 0; i < Math.min(wins, 5); i++) {
      icons.push(
        <Icon
          key={`win-${i}`}
          as={CircleIcon}
          m={ICON_M}
          w={ICON_WIDTH}
          h={ICON_HEIGHT}
          color="green"
        />,
      );
    }

    // Display up to 5 icons for losses (red)
    for (let i = 0; i < Math.min(loss, 5 - wins); i++) {
      icons.push(
        <Icon
          key={`loss-${i}`}
          as={CircleIcon}
          m={ICON_M}
          w={ICON_WIDTH}
          h={ICON_HEIGHT}
          color="red"
        />,
      );
    }

    const limitedIcons = icons.slice(0, 5);

    if (limitedIcons.length < limit) {
      for (let i = 0; i < limit - limitedIcons.length; i++) {
        limitedIcons.push(
          <Icon
            key={`gray-${i}`}
            as={CircleIcon}
            m={ICON_M}
            w={ICON_WIDTH}
            h={ICON_HEIGHT}
            color="gray"
          />,
        );
      }
    }
    return (
      <HStack>
        <Avatar bg="rgba(0, 0, 0, 0)">
          {item.badge ? (
            <Image source={{uri: item.badge}} style={styles.avatarImage} />
          ) : (
            <AvatarFallbackText>{item.name}</AvatarFallbackText>
          )}
        </Avatar>
        <Center style={styles.center}>
          <Text style={styles.text}>{item.name}</Text>
          <VStack>
            <Center>
              <Text style={styles.subtext}>last 5</Text>
              <HStack>{limitedIcons}</HStack>
            </Center>
          </VStack>
          <Pressable
            onPress={() => {
              deleteTeamFromLeagueUpdate(dispatch, item.id);
            }}>
            <Icon as={TrashIcon} m="$2" w="$4" h="$4" />
          </Pressable>
        </Center>
      </HStack>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionContainer title="League Teams">
        {!(leagueTeams.length === 0) ? (
          <FlatList
            data={leagueTeams}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          <VStack>
            <Center>
              <Icon as={AddIcon} m="$2" w="$10" h="$10" />
              <Text style={styles.text}>Add Teams</Text>
            </Center>
          </VStack>
        )}
      </SectionContainer>
      <SectionContainer title="Recruit Teams">
        {!(leagueTeams.length === item.limit) ? (
          <FlatList
            data={activityFalse}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          <Center>
            <Text style={[styles.text, styles.condText]}>League is full!</Text>
          </Center>
        )}
      </SectionContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1C1C1D',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: '#ffffff',
    paddingLeft: 20,
  },
  condText: {
    opacity: 0.4,
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  subtext: {
    fontSize: 9,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default LeagueTeamsTab;
