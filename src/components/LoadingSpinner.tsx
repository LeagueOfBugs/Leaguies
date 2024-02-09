import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Spinner} from '@gluestack-ui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import useUserDispatch from '../hooks/useUserDispatch';
import {useSelector} from 'react-redux';
import {selectUser} from '../selectors/userSelector';
import {useSeedRedux} from '../hooks';

const LoadingSpinner = () => {
  const {saveUserToDB} = useUserDispatch();
  const {user} = useSelector(selectUser);
  useEffect(() => {
    if (user) {
      saveUserToDB(user);
    }
  }, [saveUserToDB, user]);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner color="$emerald600" size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
