import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const FormInput = ({children, selection}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View style={styles.image} />
        {children}
      </View>
      <Text style={styles.selection}>{selection && selection}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  input: {
    flexDirection: 'row',
  },
  image: {
    height: 20,
    width: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginRight: 10,
  },
  selection: {
    color: '#00A1C9',
    marginRight: 10,
  },
});
