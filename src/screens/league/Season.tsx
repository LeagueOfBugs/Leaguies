import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {memo, useCallback} from 'react';
import {NoStateSeason} from './NoStatesUi';
import EmptyStateButton from '../../components/EmptyStateButton';
import {useNavigation} from '@react-navigation/native';
import SeasonInformation from './season/SeasonInformation';
import {useRoute} from '@react-navigation/native';

const Season = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {hasSeason, season} = route.params;

  console.log('in season');

  const handleCreateSeason = useCallback(() => {
    navigation.navigate('Season Form');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {hasSeason ? (
        <SeasonInformation season={season} />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.messageContainer}>
            <NoStateSeason />
          </View>
          <View style={styles.actionsContainer}>
            <EmptyStateButton
              title="START A SEASON"
              handleButtonPress={handleCreateSeason}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0c0c0',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingLeft: '20%',
    paddingRight: '20%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  messageContainer: {},
  actionsContainer: {
    height: 100,
  },
  scrollConatiner: {
    marginBottom: 16,
  },
});

export default memo(Season);
