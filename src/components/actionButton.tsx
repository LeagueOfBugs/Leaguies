import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';

const ActionButton = ({title, handleCallback}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#3E3E3E"
      style={styles.buttonContainer}
      onPress={() => handleCallback()}>
      <Text style={styles.buttons}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 5,
    backgroundColor: '#7E7E7E',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
  },
  buttons: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '300',
    textAlign: 'center',
  },
});
export default ActionButton;
