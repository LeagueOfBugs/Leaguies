import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

const LeagueScheduleTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image />
        <Text style={styles.text}>LeagueDetailsTab</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1D',
    height: '100%',
  },
  text: {
    color: '#ffffff',
  },
});
export default LeagueScheduleTab;
