import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const EmptyStateButton = ({title, handleButtonPress}: {title: string}) => {
  return (
    <Button onPress={handleButtonPress} mode="contained">
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({});

export default EmptyStateButton;
