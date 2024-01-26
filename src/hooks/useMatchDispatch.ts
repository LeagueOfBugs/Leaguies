import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createMatch} from '../store/reducers/matches/matchesSlice';
import { editSeason } from '../store/reducers/seasons/seasonSlice';

function useMatchDispatch() {
  const dispatch = useDispatch();

  const makeMatch = (newMatchModel: any, seasonsState: Seasons) => {
    dispatch(createMatch(newMatchModel));
    const newSeasonState = seasonsState.map(season => {
      if (newMatchModel.seasonId === season.id) {
        return {
          ...season,
          matches: [...season.matches, newMatchModel.id],
        };
      }
    });
    dispatch(editSeason(newSeasonState));
  };

  return {makeMatch};
}

export default useMatchDispatch;
