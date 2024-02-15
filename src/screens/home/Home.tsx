import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../../selectors/userSelector';
import Card from '../../components/card/Card';
import Matchups from '../../components/card/Matchups';
import Ranking from '../../components/card/RankingTable';
import TeamRanking from '../../components/card/teamRanking';
import {selectPlayers} from '../../selectors/playerSelectors';
import {selectMatches} from '../../selectors/matchSelector';
import WebSocketComponent from '../../webSocket/WebSocket';

const Home = () => {
  // need to retriever user info like Teams, Leagues, Seasons
  // what we have: userID
  // Use userId to find player model:
  // player model will have team and league id
  // can find season information from league with seasonId
  // look for season with seasonId

  /* Start Selectors */
  const {user} = useSelector(selectUser);
  const {players} = useSelector(selectPlayers);
  const {matches} = useSelector(selectMatches);
  // WebSocketComponent();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Card
          title="Upcoming Matches"
          subTitle="Weekly View"
          footerText="See more matches">
          <Matchups />
        </Card>
        <Card title="League Standings" subTitle="Playoffs contenders">
          <Ranking>
            <TeamRanking teamName="Barcelona" />
            <TeamRanking teamName="Barcelona" />
            <TeamRanking teamName="Barcelona" />
            <TeamRanking teamName="Barcelona" />
            <TeamRanking teamName="Barcelona" />
          </Ranking>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    // flex: 1,
    paddingVertical: 10,
    // height: '100%',
  },
  scrollView: {
    flex: 1,
  },
});
