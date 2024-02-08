import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/headers/HomeHeader';
import Player from '../screens/player/Player';

const Stack = createStackNavigator();

const PlayerNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Player Details"
        component={Player}
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

export default PlayerNav;
