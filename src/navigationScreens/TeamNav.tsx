/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Record from '../screens/team/Record';
import Roster from '../screens/team/Roster';
import Activity from '../screens/team/Activity';
import Details from '../screens/team/Details';
import Team from '../screens/team/Team';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/headers/HomeHeader';
import usePlayerDetails from '../hooks/usePlayerDetails';
import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
    </Stack.Navigator>
  );
};

const TeamNav = () => {
  const {team} = usePlayerDetails();
  const navigation = useNavigation();

  const handleCreateLeague = () => {
    navigation.navigate('Team Sports Select');
  };

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
          <FAB
            style={styles.fab}
            label="+   CREATE A TEAM"
            onPress={() => handleCreateLeague()}
          />
        </>
      ) : (
        <TeamStack />
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

export default TeamNav;
