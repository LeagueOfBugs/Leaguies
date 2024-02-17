import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Details from '../screens/league/Details';

import Rules from '../screens/league/Rules';
import Season from '../screens/league/Season';
import Teams from '../screens/league/Teams';
import Schedule from '../screens/league/Schedule';
import Fab from '../components/Fab';

const teamTopTab = createMaterialTopTabNavigator();

const LeagueDetails = () => {
  return (
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
      <Fab />
    </>
  );
};

export default LeagueDetails;
