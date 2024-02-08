import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Heading,
  FormControl,
  Input,
  InputField,
  Button,
  ButtonText,
  Link,
  LinkText,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import useUserDispatch from '../../hooks/useUserDispatch';
const ResetPassword = () => {
  const [username, setUsername] = useState('');
  const [initiated, setInitiated] = useState(false);
  const [newPass, setNewPass] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();
  const {resetUserCredentials} = useUserDispatch();
  const handleSubmit = () => {
    resetUserCredentials(username, newPass, verificationCode);
    setNewPass('');
    setVerificationCode('');
    if (initiated) {
      navigation.goBack();
    }
    setInitiated(!initiated);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Heading>RESET PASSWORD</Heading>
          <Text>We'll send you and email with a reset code</Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl minWidth="$80">
            <Input>
              <InputField
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </Input>
          </FormControl>
          {initiated && (
            <>
              <FormControl minWidth="$80">
                <Input>
                  <InputField
                    placeholder="New password"
                    type="password"
                    value={newPass}
                    onChangeText={setNewPass}
                  />
                </Input>
              </FormControl>
              <FormControl minWidth="$80">
                <Input>
                  <InputField
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                  />
                </Input>
              </FormControl>
            </>
          )}
          <Button onPress={() => handleSubmit()}>
            <ButtonText>Continue</ButtonText>
          </Button>
          <Link onPress={() => navigation.navigate('Sign in')}>
            <LinkText>Cancel</LinkText>
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
export default ResetPassword;
