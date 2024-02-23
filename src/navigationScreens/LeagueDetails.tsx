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
import {LeagueDetailsRouteProp} from './types';

const TeamTopTab = createMaterialTopTabNavigator();

const LeagueDetails = () => {
  const route = useRoute<LeagueDetailsRouteProp>();

  // Pressed league ID from LeagueList
  const {leagueId} = route.params;

  // Use Id to get league model
  const league = useWhichLeague();

  // Leeague model will containe a seasonID if one exists
  const seasonId = league?.seasonId || '';

  // Check if league has a season
  const hasSeason = useMemo(() => {
    return seasonId.length;
  }, [seasonId.length]);

  // Leagues current season if any
  const season = useWhichSeason(seasonId);
  console.log('league', league);
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
        <TeamTopTab.Screen name="Rules">
          {props => <Rules league={league} {...props} />}
        </TeamTopTab.Screen>

        <TeamTopTab.Screen name="Season">
          {props => (
            <Season
              season={season}
              leagueId={leagueId}
              hasSeason={hasSeason}
              {...props}
            />
          )}
        </TeamTopTab.Screen>
        <TeamTopTab.Screen name="Teams">
          {props => <Teams league={league} {...props} />}
        </TeamTopTab.Screen>
        <TeamTopTab.Screen name="Schedule">
          {props => (
            <Schedule hasSeason={hasSeason} season={season} {...props} />
          )}
        </TeamTopTab.Screen>
      </TeamTopTab.Navigator>
    </>
  );
};

export default memo(LeagueDetails);
