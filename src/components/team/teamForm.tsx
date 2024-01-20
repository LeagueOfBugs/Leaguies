import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import GridList from '../GridList';

const TeamForm = ({onClose, leagues}) => {
  const [names, setNames] = useState([]);
  const [teamInfo, setTeamInfo] = useState({
    name: '',
    league: '',
  });

  const handleClose = () => {
    // Handle form submission using teamInfo
    onClose(); // Close the form or perform other actions
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.teamContainer}>
          <Text style={styles.label}>Team Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={name => setTeamInfo(prev => ({...prev, name}))}
            value={teamInfo.name}
          />
        </View>
        <GridList data={leagues} />
        <View style={styles.leagueContainer}>
          <Text style={styles.label}>Pick a league</Text>
        </View>
        <Button onPress={handleClose} title="Submit" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  teamContainer: {
    marginBottom: 20,
    borderColor: 'black',
  },
  leagueContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    marginBottom: 20,
    borderColor: 'black',
  },

  picker: {
    flex: 1, // Take up remaining available space
    height: 40,
    color: 'black',
    borderColor: 'blue',
    margin: 0,
    padding: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  pickerItem: {
    fontSize: 14,
  },
});

export default TeamForm;
