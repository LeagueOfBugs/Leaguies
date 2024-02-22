import React, {memo, useMemo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Details from '../screens/league/Details';
import Rules from '../screens/league/Rules';
import Season from '../screens/league/Season';
import {useRoute} from '@react-navigation/native';
import Teams from '../screens/league/Teams';
import Schedule from '../screens/league/Schedule';

import useWhichLeague from '../hooks/useWhichLeague';
import useWhichSeason from '../hooks/useWhichSeason';

const TeamTopTab = createMaterialTopTabNavigator();

const LeagueDetails = () => {
  const route = useRoute();
  const {leagueId} = route.params;
  const league = useWhichLeague();
  const hasSeason = useMemo(() => {
    console.log('hasSeason');
    return league?.seasonId.length > 0;
  }, [league?.seasonId.length]);

  const season = useWhichSeason(league?.seasonId);
  return (
    <>
      <Details league={league} />
      <TeamTopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            color: '#000000',
            fontSize: 13,
          },
          tabBarStyle: {
            backgroundColor: '#D9D9D9',
          },
        }}>
        <TeamTopTab.Screen name="Rules" component={Rules} />
        <TeamTopTab.Screen
          name="Season"
          component={Season}
          initialParams={{
            leagueId: leagueId,
            hasSeason: hasSeason,
            season: season,
          }}
        />
        <TeamTopTab.Screen
          name="Teams"
          component={Teams}
          initialParams={{
            leagueId: leagueId,
            league: league,
          }}
        />
        <TeamTopTab.Screen
          name="Schedule"
          component={Schedule}
          initialParams={{
            leagueId: leagueId,
            hasSeason: hasSeason,
            season: season,
          }}
        />
      </TeamTopTab.Navigator>
    </>
  );
};

export default memo(LeagueDetails);
