/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import League from '../screens/league/League';
import LeagueList from '../screens/league/LeagueList';
import LeagueDetails from './LeagueDetails';
import Header from '../components/headers/HomeHeader';
import usePlayerDetails from '../hooks/usePlayerDetails';

const Stack = createStackNavigator();

const LeagueStack = () => {
  const {league} = usePlayerDetails();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="League state"
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
        name="League List"
        component={LeagueList}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitle: () => <Header header={'LEAGUIES'} />,
        }}
      />
      <Stack.Screen
        name="League Details"
        component={LeagueDetails}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitle: () => <Header header={'LEAGUIES'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default LeagueStack;
