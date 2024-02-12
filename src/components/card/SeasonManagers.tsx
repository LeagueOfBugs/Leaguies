import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Card from './Card';

const SeasonManagers = ({admin}) => {
  return (
    <Card title="Managers">
      {admin.map(player => {
        return (
          <View style={styles.container}>
            <View style={styles.image} />
            <Text style={styles.name}>{player.name}</Text>
          </View>
        );
      })}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  name: {},
});
export default SeasonManagers;
