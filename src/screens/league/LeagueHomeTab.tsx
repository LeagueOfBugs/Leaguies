import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const LeagueHomeTab = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image />
        <Text style={styles.text}>LeagueHomeTab</Text>
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
export default LeagueHomeTab;
