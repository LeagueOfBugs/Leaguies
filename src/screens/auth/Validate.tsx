import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import useUserDispatch from '../../hooks/useUserDispatch';
import {
  FormControl,
  Input,
  InputField,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Credentials {
  username: string;
  verificationCode: string;
}
const Validate = ({route}) => {
  const [verificationCode, setVerificationCode] = useState('');
  const {validateRegisteredUser} = useUserDispatch();
  const newUser = route.params;

  const handleSubmit = () => {
    /*
      ACTION - API call to lambda that handles cognito register email verification --> see userDispatcher
      NAVIGATION TO - Home screen. user is populated - cond met.
      NOTES - user is saved to redux states
      - User verification should change to true in user Model
      */
    const creds: Credentials = {
      username: newUser.username,
      verificationCode: verificationCode,
    };
    validateRegisteredUser(creds);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FormControl minWidth="$80">
          <Input>
            <InputField
              placeholder="Verification Code"
              value={verificationCode}
              onChangeText={setVerificationCode}
            />
          </Input>
        </FormControl>
        <Button onPress={() => handleSubmit()}>
          <ButtonText>Continue</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});

export default Validate;
