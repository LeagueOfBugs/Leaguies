import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {
  Heading,
  FormControl,
  Input,
  InputField,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

const ResetPassword = () => {
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
              <InputField placeholder="Username" />
            </Input>
          </FormControl>
          <Button>
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
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {},
  formContainer: {},
});
export default ResetPassword;
