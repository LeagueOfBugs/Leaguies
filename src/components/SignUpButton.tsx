import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SignUpButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('Sign up')}>Sign up</Text>
    </View>
  );
};

export default SignUpButton;
