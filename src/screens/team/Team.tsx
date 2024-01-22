import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {
  Text,
  Fab,
  FabIcon,
  FabLabel,
  EditIcon,
  Center,
} from '@gluestack-ui/themed';
import {View, StyleSheet, Modal, SafeAreaView} from 'react-native';
import TeamForm from '../../components/team/teamForm';

const Team = () => {
  const [showModal, setShowModal] = useState(false);

  const {teams} = useSelector((state: RootState) => state.teams);
  const myTeam = teams.find(
    team => team.id === '905b4d32-ee84-4d1d-8d88-2d14416cfab9',
  );
  const [wins, loss] = myTeam?.record ?? [];

  const {leagues} = useSelector((state: RootState) => state.leagues);

  const handlePress = () => {
    setShowModal(true);
  };

  const renderRecord = () =>
    (wins || loss) && (
      <Text>
        {wins} - {loss}
      </Text>
    );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Team details component */}
        <View style={styles.teamDetailsContainer}>
          <Text>{myTeam?.name}</Text>
          <Text>{myTeam?.league}</Text>
          {renderRecord()}
        </View>
        {/* component for fab to min screen render */}
        <Fab
          size="md"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={() => handlePress()}>
          <FabIcon as={EditIcon} mr="$1" />
          <FabLabel>Edit Team</FabLabel>
        </Fab>
        <Center style={styles.modalContainer}>
          <Modal visible={showModal} animationType="slide">
            <TeamForm onClose={() => setShowModal(false)} leagues={leagues} />
          </Modal>
        </Center>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1C1C1D',
  },
  teamDetailsContainer: {
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 200,
  },
});

export default Team;
