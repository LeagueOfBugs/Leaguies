import {RouteProp} from '@react-navigation/native';

export type LeagueDetailsRouteProp = RouteProp<
  {LeagueDetails: {leagueId: string}},
  'LeagueDetails'
>;
