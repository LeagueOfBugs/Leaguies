import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createSeason} from '../store/reducers/seasons/seasonSlice';
import useLeagueDispatch from '../hooks/useLeagueDispatch';

function useSeasonDispatch() {
  const dispatch = useDispatch();
  const {addSeasonToLeague} = useLeagueDispatch();

  const makeSeason = (
    seasonObj: Season,
    leagues: League[],
    leagueId?: string,
  ) => {
    createSeason(seasonObj);
    addSeasonToLeague(seasonObj, leagues, leagueId);
  };

  return {makeSeason};
}

export default useSeasonDispatch;
