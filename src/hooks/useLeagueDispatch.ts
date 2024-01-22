import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addTeam,
  createLeague,
  deleteTeam,
  terminateLeague,
} from '../store/reducers/leagues/leagueSlice';
import {editTeam} from '../store/reducers/teams/teamSlice';
import {editPlayer} from '../store/reducers/players/playerSlice';

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
    return leagueObj;
  };

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

  const deleteLeague = (
    leagueId: any,
    leagues: League[],
    teams: Team[],
    players: Player[],
    navigation: any,
  ) => {
    // update teams
    const newTeamState = teams.map(team => {
      if (team.league === leagueId) {
        return {
          ...team,
          league: '',
          active: false,
        };
      }
      return team;
    });

    dispatch(editTeam(newTeamState));

    // update players
    const newPlayerState = players.map(player => {
      if (player.league === leagueId) {
        return {
          ...player,
          league: '',
        };
      }
      return player;
    });

    dispatch(editPlayer(newPlayerState));

    // Update leagues
    const newLeagueState = leagues.filter(league => league.id !== leagueId);
    dispatch(terminateLeague(newLeagueState));
    navigation.navigate('Leagues');
  };

  return {
    addLeagueTeam,
    removeLeagueTeam,
    addLeague,
    updateTeamsSelected,
    deleteLeague,
  };
}

export default useLeagueDispatch;
