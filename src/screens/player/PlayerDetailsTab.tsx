import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import {useSelector} from 'react-redux';
import {selectPlayerById} from '../../selectors/playerSelectors';
import {Avatar, AvatarFallbackText, Center, VStack} from '@gluestack-ui/themed';
import {selectTeamById} from '../../selectors/teamsSelector';
import {selectLeagueById} from '../../selectors/leagueSelector';

const PlayerDetails = ({item}) => {
  const playerInfo = useSelector(selectPlayerById(item));
  const [teamInfo] = useSelector(selectTeamById(playerInfo?.team));
  const leagueInfo = useSelector(selectLeagueById(playerInfo?.team));

  return (
    <SafeAreaView style={styles.container}>
      <Center>
        <SectionContainer title="Player Details">
          <Center>
            <VStack>
              <View>
                <Avatar bgColor="$amber600" size="xl" borderRadius="$xl">
                  <AvatarFallbackText>{playerInfo?.name}</AvatarFallbackText>
                </Avatar>
              </View>

              <Text style={styles.text}>name: {playerInfo?.name}</Text>
              <Text style={styles.text}>
                team: {teamInfo ? teamInfo?.name : 'No teams'}
              </Text>
              <Text style={styles.text}>Position: {playerInfo?.position}</Text>
              <Text style={styles.text}>
                League: {leagueInfo ? leagueInfo?.name : 'No leagues'}
              </Text>
              <Text style={styles.text}>Agency: {playerInfo?.agency}</Text>
              <Text style={styles.text}>
                Online Status:
                {playerInfo?.onlineStatus ? 'online' : 'offline'}
              </Text>
            </VStack>
          </Center>
        </SectionContainer>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#1C1C1D',
    justifyContent: 'center',
  },
  infoContainer: {
    height: 100,
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#ffffff',
  },
});

export default PlayerDetails;
