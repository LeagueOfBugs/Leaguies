import React from 'react';
import usePlayerDetails from '../hooks/usePlayerDetails';
import {useNavigation} from '@react-navigation/native';
import ListElement from './ListElement';

const CreateLeagueIterables = () => {
  const {player, leagues, seasons} = usePlayerDetails();
  const navigation = useNavigation();

  return leagues.map(league => {
    const handlePress = () => {
      navigation.navigate('League Details', {leagueId: league.id});
    };
    let isAdmin = false;
    const leagueName = league.name;
    if (league.seasonId.length > 0) {
      const [seasonModel] = seasons.filter(
        season => season.id === league.seasonId,
      );
      isAdmin = seasonModel.admins.includes(player.id);

      return (
        <React.Fragment key={league.id}>
          <ListElement
            name={leagueName}
            admin={isAdmin}
            season={seasonModel.name}
            handlePress={handlePress}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={league.id}>
        <ListElement
          name={leagueName}
          admin={isAdmin}
          handlePress={handlePress}
        />
        ;
      </React.Fragment>
    );
  });
};

export default CreateLeagueIterables;
