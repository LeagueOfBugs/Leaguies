import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';
import LFP from '../../components/LFP';
import LFT from '../../components/LFT';
import GridList from '../../components/GridList';
import {useSeedRedux} from '../../hooks';
import {selectLeagues} from '../../selectors/leagueSelector';

type screenItem = 'leagues' | 'LFP' | 'LFT';

const Home = ({navigation}) => {
  const {leagues} = useSelector(selectLeagues);
  const mappedLeagues = leagues.map(league => ({
    id: league.id,
    name: league.name,
    badge: league.badge,
  }));

  // Seed this please OMG!
  useSeedRedux();

  const renderItem = ({item}: {item: screenItem}) => {
    if (item === 'leagues') {
      return <GridList leagues={leagues} navigation={navigation} />;
    } else if (item === 'LFP') {
      return <LFP navigation={navigation} />;
    } else if (item === 'LFT') {
      return <LFT navigation={navigation} />;
    }
    return <GridList leagues={mappedLeagues} />;
  };

  return (
    <SafeAreaView style={{backgroundColor: '#1C1C1D'}}>
      <FlatList
        data={['leagues', 'LFP', 'LFT']}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1D',
    flexGrow: 1,
    paddingVertical: 10,
    height: '100%',
  },
});
