import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SectionContainer = ({children, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    borderRadius: 10,
    width: 420,
    alignSelf: 'center',
    backgroundColor: '#252526',
  },
  title: {
    justifyContent: 'flex-start',
    color: '#ffffff',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: '300',
  },
});
export default SectionContainer;
