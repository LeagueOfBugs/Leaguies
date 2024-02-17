import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import ActionButton from './actionButton';
/*
TODO:
header styling icons and func
*/
interface FormsProps {
  title: string;
  children: React.JSX.Element;
  steps?: {
    current: number;
    outOf: number;
  };
  handleContinue: () => void;
  handleCancel: () => void;
  titleArray?: [];
}

const Forms = ({
  title,
  children,
  steps,
  handleContinue,
  handleCancel,
  titleArray,
}: FormsProps) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <View style={styles.header}>
          <View style={styles.headerWrapper}>
            <Text>text for now GO BACK</Text>
            <Pressable onPress={() => handleCancel()}>
              <Text style={styles.cancel}>Cancel</Text>
            </Pressable>
          </View>
          <View style={styles.formHeader}>
            <Text style={styles.title}>{title}</Text>
            {steps && (
              <Text style={styles.steps}>
                Step {steps.current} of {steps.outOf}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.form}>{children}</View>
      </View>
      <View style={styles.buttonContainer}>
        {steps && steps.current === steps.outOf ? (
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
