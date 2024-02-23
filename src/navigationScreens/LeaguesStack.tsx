/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import League from '../screens/league/League';
import LeagueList from '../screens/league/LeagueList';
import LeagueDetails from './LeagueDetails';
import Header from '../components/headers/HomeHeader';
import {useLeagues, usePlayer} from '../hooks/usePlayerDetails';

const Stack = createStackNavigator();

const LeagueStack = () => {
  const player = usePlayer();
  console.log('player', player);
  const leagues = useLeagues(player.leagues);

  return (
    <Stack.Navigator>
      {leagues.length >= 1 ? (
        <>
          <Stack.Screen
            name="League List"
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              // headerTitle: () => <Header header={'LEAGUIES'} />,
            }}>
            {props => (
              <LeagueList {...props} leagues={leagues} player={player} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="League Details"
            component={LeagueDetails}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              // headerTitle: () => <Header header={'LEAGUIES'} />,
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default memo(LeagueStack);
