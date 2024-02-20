import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

interface ListElementProps {
  name: string;
  season?: string;
  admin: boolean;
  handlePress: () => void;
}
const ListElement = ({name, season, admin, handlePress}: ListElementProps) => {
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {admin ? (
        <Text style={styles.admin}>ADMIN</Text>
      ) : (
        <Text style={styles.player}>PLAYER</Text>
      )}
      <View style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      {season && <Text style={styles.season}>{season}</Text>}
    </Pressable>
  );
};

export default ListElement;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 200,
    maxHeight: 150,
    padding: 15,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
  season: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },
  admin: {
    color: '#4356FF',
  },
  player: {
    color: '#00AE07',
  },
});
