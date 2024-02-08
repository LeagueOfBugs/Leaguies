import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const SearchTeams = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SearchTeams</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0c0c0',
  },
});

export default SearchTeams;
