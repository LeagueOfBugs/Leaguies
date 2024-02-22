import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import Card from './Card';

const SeasonManagers = ({admin}) => {
  console.log('in season managers');
  return (
    <Card title="Managers">
      {admin.map(player => {
        return (
          <View style={styles.container} key={player.id}>
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

export default memo(SeasonManagers, (prevProps, nextProps) => {
  // Only re-render if the admin array reference changes
  return prevProps.admin === nextProps.admin;
});
