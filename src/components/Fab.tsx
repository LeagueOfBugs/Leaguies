import {StyleSheet} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Fab = () => {
  const navigation = useNavigation();
  const handleCreateLeague = () => {
    navigation.navigate('Sports Select');
  };
  return (
    <FAB
      style={styles.fab}
      label="+   CREATE A LEAGUE"
      onPress={() => handleCreateLeague()}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Fab;
