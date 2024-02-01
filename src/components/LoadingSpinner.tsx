import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Spinner} from '@gluestack-ui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoadingSpinner = ({loading}) => {
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Spinner color="$emerald600" size="large" />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
