import React, {memo, useCallback, useMemo} from 'react';
import {
  useLeagues,
  usePlayer,
  useSeasons,
  useUser,
} from '../hooks/usePlayerDetails';
import {useNavigation} from '@react-navigation/native';
import ListElement from './ListElement';

const CreateLeagueIterables = ({leagues, player}) => {
  console.log('create league Iterables');
  const navigation = useNavigation();

  const getSeasonIds = useMemo(() => {
    console.log('inside get seasonids');
    const leaguesWithSeasons = leagues.filter(
      league => league.seasonId.length > 0,
    );
    return leaguesWithSeasons.map(season => season.seasonId);
  }, [leagues]);

  const seasons = useSeasons(getSeasonIds);

  const handlePress = useCallback(
    (leagueId: string) => {
      console.log('handlecallback');
      navigation.navigate('League Details', {leagueId: leagueId});
    },
    [navigation],
  );

  const renderLeagues = useMemo(() => {
    return leagues.map(league => {
      const isAdmin = league.admin.includes(player?.id);
      let seasonName;
      if (league.seasonId!.length > 0) {
        const [seasonModel] = seasons.filter(
          season => season.id === league.seasonId,
        );
        seasonName = seasonModel.name;
      }

      return (
        <React.Fragment key={league.id}>
          <ListElement
            name={league.name}
            admin={isAdmin}
            season={seasonName}
            handlePress={() => handlePress(league.id)}
          />
        </React.Fragment>
      );
    });
  }, [handlePress, leagues, player?.id, seasons]);

  return <>{renderLeagues}</>;
};

export default memo(CreateLeagueIterables);
