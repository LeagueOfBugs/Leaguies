import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Heading,
  FormControl,
  Input,
  InputField,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import registerUserAPI from '../../service/registerUserAPI';
import {useNavigation} from '@react-navigation/native';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [newUser, setNewUser] = useState(initialState);
  const navigation = useNavigation();
  const handleSubmit = () => {
    const {username, email, password} = newUser;
    registerUserAPI(username, email, password);
    navigation.navigate('Sign in');
    setNewUser(initialState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headingContainer}>
          <Heading>CHOOSE A USERNAME</Heading>
          <Text style={styles.text}>
            Your username will help teams and other players find you in the app
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl minWidth="$80">
            <Input>
              <InputField
                placeholder="Username"
                onChangeText={input =>
                  setNewUser({
                    ...newUser,
                    username: input,
                  })
                }
              />
            </Input>
          </FormControl>
          <FormControl minWidth="$80">
            <Input>
              <InputField
                placeholder="Email"
                onChangeText={input =>
                  setNewUser({
                    ...newUser,
                    email: input,
                  })
                }
              />
            </Input>
          </FormControl>
          <FormControl minWidth="$80">
            <Input>
              <InputField
                placeholder="Password"
                onChangeText={input =>
                  setNewUser({
                    ...newUser,
                    password: input,
                  })
                }
              />
            </Input>
          </FormControl>
          <Button onPress={() => handleSubmit()}>
            <ButtonText>Continue</ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
  },
  headingContainer: {
    maxWidth: 300,
    alignItems: 'center',
  },
  formContainer: {},
  text: {
    textAlign: 'center',
  },
});

export default SignUp;
