import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {
  Heading,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  Link,
  LinkText,
} from '@gluestack-ui/themed';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Heading>SIGN IN WITH EMAIL</Heading>
          <Text>Enter your email and password</Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl minWidth="$80">
            <FormControlLabel>
              <FormControlLabelText>Email address</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField />
            </Input>
          </FormControl>

          <FormControl minWidth="$80">
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField />
            </Input>
          </FormControl>

          <Button>
            <ButtonText>Continue</ButtonText>
          </Button>
          <Link>
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
  subContainer: {},
  formContainer: {},
});

export default SignUp;
