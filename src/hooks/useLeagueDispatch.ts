import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addTeam,
  createLeague,
  deleteTeam,
} from '../store/reducers/leagues/leagueSlice';
import {editTeam} from '../store/reducers/teams/teamSlice';
import {selectTeamByIdBulk} from '../selectors/teamsSelector';

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
          teams: [...league?.teams, teamObj.id],
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
    dispatch(editTeam(newTeamState));
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
          teams: league?.teams?.filter(team => team !== teamObj.id),
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
    dispatch(editTeam(newTeamState));
  };

  const addLeague = (leagueObj: League) => {
    dispatch(createLeague(leagueObj));
  };

  // update teams
  const updateTeamsSelected = (
    teamsToUpdate: Team[],
    leagueId: string | undefined,
    teams: Team[],
  ) => {
    const removeTeamsToUpdate = teams.filter(
      team => !teamsToUpdate.map(updateTeam => updateTeam.id).includes(team.id),
    );

    const updatedTeams = teamsToUpdate.map(team => ({
      ...team,
      active: true,
      league: leagueId,
    }));

    dispatch(editTeam([...removeTeamsToUpdate, ...updatedTeams]));
  };

  return {addLeagueTeam, removeLeagueTeam, addLeague, updateTeamsSelected};
}

export default useLeagueDispatch;
