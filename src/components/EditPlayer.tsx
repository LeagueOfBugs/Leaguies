import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, ButtonText} from '@gluestack-ui/themed';
import {useDispatch, useSelector} from 'react-redux';
interface EditPlayerProps {
  onClose: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}
import {edit} from '../store/reducers/players/playerSlice';

const EditPlayer = ({onClose}: EditPlayerProps) => {
  const dispatch = useDispatch();
  const {players} = useSelector((state: RootState) => state.players);
  const player = players.find(
    el => el.id === '905b4d32-ee84-4d1d-8d88-2d14416cfab8',
  );
  const [playerInfo, setPlayerInfo] = useState({
    name: player?.name,
    agency: player?.agency,
    position: player?.position,
    league: player?.league,
    team: player?.team,
  });

  const handleInputChange = (field: string, value: string) => {
    setPlayerInfo(prevInfo => ({
      ...prevInfo,
      [field.toLowerCase()]: value.toLowerCase(),
    }));
  };

  const handleSubmit = (evt: NativeSyntheticEvent<NativeTouchEvent>) => {
    const agency: Agency = playerInfo?.agency
      ?.toLowerCase()
      .includes('restricted')
      ? 'restricted'
      : 'freeAgent';
    const editedPlayer = {
      ...playerInfo,
      id: '905b4d32-ee84-4d1d-8d88-2d14416cfab8',
      agency: agency,
    };
    dispatch(edit(editedPlayer));
    onClose(evt);
  };
  return (
    <View style={styles.container}>
      <Text>Edit player</Text>
      <View>
        <TextInput
          onChangeText={text => handleInputChange('name', text)}
          placeholder={player?.name}
        />
        <TextInput
          onChangeText={text => handleInputChange('agency', text)}
          placeholder={player?.agency}
        />
        <TextInput
          onChangeText={text => handleInputChange('position', text)}
          placeholder={player?.position}
        />
        <TextInput
          onChangeText={text => handleInputChange('league', text)}
          placeholder={player?.league}
        />
        <TextInput
          onChangeText={text => handleInputChange('team', text)}
          placeholder={player?.team}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditPlayer;
