import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  View,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
// import {useSelector} from 'react-redux';
import {Button, ButtonText, Text} from '@gluestack-ui/themed';
import {createPlayer} from '../store/reducers/players/playerSlice';

interface AddTeamProps {
  onClose: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const AddTeam = ({onClose}: AddTeamProps) => {
  const {players} = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    agency: '',
    position: '',
    league: '',
    team: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setPlayerInfo(prevInfo => ({
      ...prevInfo,
      [field.toLowerCase()]: value.toLowerCase(),
    }));
  };

  const handleSubmit = (evt: NativeSyntheticEvent<NativeTouchEvent>) => {
    if (
      !players.find(
        player => player.name.toLowerCase() === playerInfo.name.toLowerCase(),
      )
    ) {
      const agency: Agency = playerInfo.agency.includes('restricted')
        ? 'restricted'
        : 'freeAgent';
      const player = {
        ...playerInfo,
        agency: agency,
      };
      dispatch(createPlayer(player));
      onClose(evt);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add player</Text>
      {/* <View>
        <TextInput
          onChangeText={text => handleInputChange('name', text)}
          placeholder="Player name"
        />
        <TextInput
          onChangeText={text => handleInputChange('agency', text)}
          placeholder="Player agency"
        />
        <TextInput
          onChangeText={text => handleInputChange('position', text)}
          placeholder="Player position"
        />
        <TextInput
          onChangeText={text => handleInputChange('league', text)}
          placeholder="Player league"
        />
        <TextInput
          onChangeText={text => handleInputChange('team', text)}
          placeholder="Player team"
        />
      </View>
      <Button action="positive" onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
      <Button action="negative" onPress={event => onClose(event)}>
        <ButtonText>Close</ButtonText>
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTeam;
