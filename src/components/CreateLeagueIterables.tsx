import React, {memo, useCallback, useMemo} from 'react';
import {useSeasons} from '../hooks/usePlayerDetails';
import {useNavigation} from '@react-navigation/native';
import ListElement from './ListElement';

const CreateLeagueIterables = ({leagues, player}) => {
  const navigation = useNavigation();

  const getSeasonIds = useMemo(() => {
    const leaguesWithSeasons = leagues.filter(
      league => league.seasonId.length > 0,
    );
    return leaguesWithSeasons.map(season => season.seasonId);
  }, [leagues]);

  const seasons = useSeasons(getSeasonIds);

  const handlePress = useCallback(
    (leagueId: string) => {
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
