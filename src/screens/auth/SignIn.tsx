import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  ButtonText,
  FormControl,
  Heading,
  Input,
  Link,
  LinkText,
  Text,
  InputField,
} from '@gluestack-ui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import useUserDispatch from '../../hooks/useUserDispatch';

const SignIn = () => {
  const navigation = useNavigation();
  const {setUser} = useUserDispatch();

  const [creds, setCreds] = useState({
    username: '',
    password: '',
  });

  const onSubmit = () => {
    setUser(creds);
    setCreds({
      username: '',
      password: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Heading>SIGN IN WITH EMAIL</Heading>
          <Text>Enter your email and password</Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl minWidth="$80">
            <Input>
              <InputField
                placeholder="Username"
                onChangeText={input => setCreds({...creds, username: input})}
                value={creds.username}
              />
            </Input>
          </FormControl>
          <FormControl minWidth="$80">
            <Input>
              <InputField
                placeholder="Password"
                onChangeText={input => setCreds({...creds, password: input})}
                value={creds.password}
                type="password"
              />
            </Input>
          </FormControl>
          <Button onPress={() => onSubmit()}>
            <ButtonText>Continue</ButtonText>
          </Button>
          <Link onPress={() => navigation.navigate('Reset password')}>
            <LinkText>Forgot Password?</LinkText>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
  },
  formContainer: {},
});

export default SignIn;
