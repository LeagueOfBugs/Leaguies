import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../selectors/userSelector';
import {seedPlayer} from '../../thunks/seedPlayerThunk';
import {seedLeagues} from '../../thunks/seedLeagueThunk';
import {selectPlayers} from '../../selectors/playerSelectors';
import {seedSeasons} from '../../thunks/seedSeasonThunk';
import {seedTeams} from '../../thunks/seedTeamThunk';
import {selectTeams} from '../../selectors/teamsSelector';
import {selectLeagues} from '../../selectors/leagueSelector';
import {selectSeasons} from '../../selectors/seasonSelector';
import {loadedComplete} from '../../store/reducers/user/userSlice';
import {seedMatches} from '../../thunks/seedMatchesThunk';
// fix register loading spinner save user to db func will not get called
const SignIn = () => {
  const navigation = useNavigation();
  const {setUser, retrieveUserDetails} = useUserDispatch();
  const {user} = useSelector(selectUser);
  const {players} = useSelector(selectPlayers);
  const {teams} = useSelector(selectTeams);
  const {leagues} = useSelector(selectLeagues);
  const {seasons} = useSelector(selectSeasons);
  const [creds, setCreds] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(seedPlayer('players'));
      dispatch(seedLeagues('Leagues'));
      dispatch(seedSeasons('seasons'));
      dispatch(seedTeams('teams'));
      dispatch(seedMatches('matches'));
    }
  }, [dispatch, user]);

  useEffect(() => {
    // Navigate away when seeding is complete
    if (
      players.length > 0 &&
      teams.length > 0 &&
      leagues.length > 0 &&
      seasons.length > 0
    ) {
      dispatch(loadedComplete(true));
    }
    if (user) {
      if (user.loaded) {
        navigation.navigate('Home'); // Change 'Home' to the desired destination
      }
    }
  }, [
    dispatch,
    leagues.length,
    navigation,
    players.length,
    seasons.length,
    teams.length,
    user,
  ]);

  const onSubmit = () => {
    setUser(creds);
    setCreds({
      username: '',
      password: '',
    });
    retrieveUserDetails(creds.username);
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
