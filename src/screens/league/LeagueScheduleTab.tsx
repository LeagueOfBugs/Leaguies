import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {AddIcon, Fab, FabIcon, FabLabel, HStack} from '@gluestack-ui/themed';
import LeagueCalendar from '../../components/Calendar';
const LeagueScheduleTab = ({route}) => {
  const data = route.params;
  const handleCreateTeam = () => {
    console.log('create game MF!!!!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <LeagueCalendar markedDates={data} route={route} />
        <Fab
          onPress={() => handleCreateTeam()}
          size="md"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}>
          <FabIcon as={AddIcon} mr="$1" />
          <FabLabel>Add a Game</FabLabel>
        </Fab>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
  },
});
export default LeagueScheduleTab;
