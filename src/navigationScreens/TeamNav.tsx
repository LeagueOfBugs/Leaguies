import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Record from '../screens/team/Record';
import Roster from '../screens/team/Roster';
import Activity from '../screens/team/Activity';
import Details from '../screens/team/Details';
import Team from '../screens/team/Team';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/headers/HomeHeader';
import SportsSelect from '../screens/team/SportsSelect';
import TeamForm from '../screens/team/TeamForm';
import TeamLogo from '../screens/team/TeamLogo';
import SearchTeams from '../screens/team/SearchTeams';

const teamTopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TeamStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Team Stack"
        component={Team}
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
          headerTitle: () => <Header header={'CREATE A TEAM'} />,
        }}
      />
      <Stack.Screen
        name="Team Form"
        component={TeamForm}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerLeft: () => null,
          headerTitle: () => <Header header={'CREATE A TEAM'} />,
        }}
      />
      <Stack.Screen
        name="Team Logo"
        component={TeamLogo}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerLeft: () => null,
          headerTitle: () => <Header header={'CREATE A TEAM'} />,
        }}
      />
      <Stack.Screen
        name="Search Teams"
        component={SearchTeams}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TeamNav = () => {
  const team = false;
  return (
    <>
      {team ? (
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
            <teamTopTab.Screen name="Record" component={Record} />
            <teamTopTab.Screen name="Roster" component={Roster} />
            <teamTopTab.Screen name="Activity" component={Activity} />
          </teamTopTab.Navigator>
        </>
      ) : (
        <TeamStack />
      )}
    </>
  );
};

export default TeamNav;
