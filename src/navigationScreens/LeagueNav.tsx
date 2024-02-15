/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Details from '../screens/league/Details';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/headers/HomeHeader';
import SportsSelect from '../screens/league/SportsSelect';
import League from '../screens/league/League';
import LeagueForm from '../screens/league/LeagueForm';
import LeagueLogo from '../screens/league/LeagueLogo';
import Rules from '../screens/league/Rules';
import Season from '../screens/league/Season';
import Teams from '../screens/league/Teams';
import Schedule from '../screens/league/Schedule';
import SearchLeagues from '../screens/league/SearchLeagues';
import usePlayerDetails from '../hooks/usePlayerDetails';
import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const teamTopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const LeagueStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="League Stack"
        component={League}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitle: () => <Header header={'LEAGUIES'} />,
        }}
      />
      <Stack.Screen
        name="Sports Select"
        component={SportsSelect}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerLeft: () => null,
          headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
        }}
      />
      <Stack.Screen
        name="League Form"
        component={LeagueForm}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerLeft: () => null,
          headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
        }}
      />
      <Stack.Screen
        name="League Logo"
        component={LeagueLogo}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerLeft: () => null,
          headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
        }}
      />
      <Stack.Screen
        name="Search Teams"
        component={SearchLeagues}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const LeagueNav = () => {
  const navigation = useNavigation();
  const handleCreateLeague = () => {
    navigation.navigate('Sports Select');
  };
  const {league} = usePlayerDetails();
  return (
    <>
      {league ? (
        <>
          <Details />
          <teamTopTab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                color: '#000000',
                fontSize: 13,
              },
              tabBarStyle: {
                backgroundColor: '#D9D9D9',
              },
            }}>
            <teamTopTab.Screen name="Rules" component={Rules} />
            <teamTopTab.Screen name="Season" component={Season} />
            <teamTopTab.Screen name="Teams" component={Teams} />
            <teamTopTab.Screen name="Schedule" component={Schedule} />
          </teamTopTab.Navigator>
          <FAB
            style={styles.fab}
            label="+   CREATE A LEAGUE"
            onPress={() => handleCreateLeague()}
          />
        </>
      ) : (
        <LeagueStack />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default LeagueNav;
