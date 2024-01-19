import {
  View,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  Modal,
  ModalBackdrop,
  ModalContent,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {edit} from '../store/reducers/teams/teamSlice';

interface EditTeamProps {
  onClose: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  myTeam: Team;
  record: [];
  leagues: League[];
  teams: Team[];
}
const EditTeam = ({onClose, myTeam, leagues, teams}: EditTeamProps) => {
  const dispatch = useDispatch();
  const [teamInfo, setTeamInfo] = useState({
    name: myTeam?.name,
    league: myTeam?.league,
    record: myTeam.record || [],
  });
  const handleInputChange = (field: string, value: string) => {
    setTeamInfo(prevInfo => ({
      ...prevInfo,
      [field.toLowerCase()]: value.toLowerCase(),
    }));
  };

  const handleSubmit = (evt: NativeSyntheticEvent<NativeTouchEvent>) => {
    const doesLeagueExist = leagues.find(
      league => league.name === teamInfo.name,
    );
    const doesTeamExist = teams.find(league => league.name === teamInfo.name);

    let updatedTeam = {
      ...teamInfo,
      id: '905b4d32-ee84-4d1d-8d88-2d14416cfab9',
    };

    if (!(doesLeagueExist || doesTeamExist)) {
      dispatch(edit(updatedTeam));
    }
    console.log(teamInfo);
    onClose(evt);
  };

  return (
    <View style={styles.container}>
      <Text>Edit player</Text>
      <View>
        <TextInput
          onChangeText={text => handleInputChange('name', text)}
          placeholder={myTeam?.name}
        />
        <TextInput
          onChangeText={text => handleInputChange('position', text)}
          placeholder={myTeam?.league}
        />
        <TextInput
          onChangeText={text => handleInputChange('league', text)}
          placeholder={`${myTeam?.record[0]} - ${myTeam?.record[1]}`}
        />
      </View>
      <Button onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
      <Button onPress={event => onClose(event)}>
        <ButtonText>Close</ButtonText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditTeam;
