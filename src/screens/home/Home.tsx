import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import LFP from '../../components/LFP';
import LFT from '../../components/LFT';
import GridList from '../../components/GridList';
import useSeedRedux from '../../hooks';
import {selectLeagues} from '../../selectors/leagueSelector';

type screenItem = 'leagues' | 'LFP' | 'LFT';

const Home = () => {
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
      return <GridList leagues={mappedLeagues} />;
    } else if (item === 'LFP') {
      return <LFP />;
    } else if (item === 'LFT') {
      return <LFT />;
    }
    return <GridList leagues={mappedLeagues} />;
  };

  return (
    <FlatList
      data={['leagues', 'LFP', 'LFT']}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
  },
});
