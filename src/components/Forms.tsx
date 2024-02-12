import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import ActionButton from './actionButton';

const Forms = ({
  title,
  children,
  steps,
  handleContinue,
  handleCancel,
}: {
  title: string;
  children: React.JSX.Element;
}) => {
  const {current, outOf} = steps;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerWrapper}>
            <Text>text for now GO BACK</Text>
            <Pressable onPress={() => handleCancel()}>
              <Text style={styles.cancel}>Cancel</Text>
            </Pressable>
          </View>
          <View style={styles.formHeader}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.steps}>
              Step {current} of {outOf}
            </Text>
          </View>
        </View>
        <View style={styles.form}>{children}</View>
      </View>
      <View style={styles.buttonContainer}>
        {current === outOf ? (
          <ActionButton title="SUBMIT" handleCallback={handleContinue} />
        ) : (
          <ActionButton title="CONTINUE" handleCallback={handleContinue} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'space-between',
  },

  container: {
    // borderWidth: 1,
    // flex: 1,
  },
  header: {},
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 5,
    marginBottom: 20,
  },
  formHeader: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  form: {
    paddingHorizontal: 25,
  },
  cancel: {
    color: '#4112FE',
  },
  title: {
    fontSize: 25,
  },
  steps: {
    color: '#808080',
    fontSize: 16,
    fontWeight: '300',
  },
  buttonContainer: {
    width: 130,
    alignSelf: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    borderWidth: 2,
  },
});

export default Forms;
