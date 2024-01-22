import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addTeam,
  createLeague,
  deleteTeam,
} from '../store/reducers/leagues/leagueSlice';
import {editTeam} from '../store/reducers/teams/teamSlice';

function useLeagueDispatch() {
  const dispatch = useDispatch();

  const addLeagueTeam = (
    teamObj: Team,
    leagueId: string,
    leagueState: League[],
    teamState: Team[],
  ) => {
    const newState = leagueState.map(league => {
      if (league.id === leagueId) {
        return {
          ...league,
          teams: [...league.teams, teamObj.id],
        };
      }
      return league;
    });

    const newTeamState = teamState.map(team => {
      if (team.id === teamObj.id) {
        return {
          ...team,
          active: true,
          league: leagueId,
        };
      }
      return team;
    });

    dispatch(addTeam({leagues: newState}));
    dispatch(editTeam({teams: newTeamState}));
  };

  const removeLeagueTeam = (
    teamObj: Team,
    leagueId: string,
    leagueState: League[],
    teamState: Team[],
  ) => {
    const newLeagueState = leagueState.map(league => {
      if (league.id === leagueId) {
        return {
          ...league,
          teams: league.teams.filter(team => team !== teamObj.id),
        };
      }
      return league;
    });

    const newTeamState = teamState.map(team => {
      if (team.id === teamObj.id) {
        return {
          ...team,
          active: false,
          league: '',
        };
      }
      return team;
    });
    dispatch(deleteTeam({leagues: newLeagueState}));
    dispatch(editTeam({teams: newTeamState}));
  };

  const CreateLeague = (leagueObj: League) => {
    dispatch(createLeague(leagueObj));
  };

  return {addLeagueTeam, removeLeagueTeam, CreateLeague};
}

export default useLeagueDispatch;
