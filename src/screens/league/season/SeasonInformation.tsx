import {View, ScrollView, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import SeasonManagers from '../../../components/card/SeasonManagers';
import useMPlayerDetails from '../../../hooks/useMPlayerDetails';
import SeasonDetails from '../../../components/card/SeasonDetails';

const SeasonInformation = ({season}) => {
  const leagueAdminModels = useMPlayerDetails(season?.admins);
  return (
    <ScrollView>
      <View style={styles.scrollConatiner}>
        <SeasonManagers admin={leagueAdminModels} />
        <SeasonDetails season={season} />
      </View>
    </ScrollView>
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

export default memo(SeasonInformation);
