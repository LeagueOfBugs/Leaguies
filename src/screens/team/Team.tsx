// import {View} from 'react-native';
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
import {View, StyleSheet, Modal} from 'react-native';
import EditTeam from '../../components/EditTeam';
import AddTeam from '../../components/AddTeam';

type Placement = 'bottom right' | 'bottom left';

const Team = () => {
  const {teams} = useSelector((state: RootState) => state.teams);
  const {leagues} = useSelector((state: RootState) => state.leagues);
  const myTeam = teams.find(
    team => team.id === '905b4d32-ee84-4d1d-8d88-2d14416cfab9',
  );
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [showModal, setShowModal] = useState(false);
  const record = myTeam?.record ?? [];
  const [wins, loss] = record;

  const handlePress = (placement: Placement) => {
    setShowModal(true);
    switch (placement) {
      case 'bottom right':
        setModalContent(
          <EditTeam
            onClose={() => setShowModal(false)}
            myTeam={myTeam}
            record={`${wins} - ${loss}`}
            leagues={leagues}
            teams={teams}
          />,
        );
        console.log(modalContent);
        break;
      case 'bottom left':
        setModalContent(<AddTeam onClose={() => setShowModal(false)} />);
        break;
      default:
        setModalContent(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamDetailsContainer}>
        <Text>{myTeam?.name}</Text>
        <Text>{myTeam?.league}</Text>
        {(wins || loss) && (
          <Text>
            {wins} - {loss}
          </Text>
        )}
      </View>
      <Fab
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => handlePress('bottom right')}>
        <FabIcon as={EditIcon} mr="$1" />
        <FabLabel>Edit Team Info</FabLabel>
      </Fab>
      <Center style={styles.modalContainer}>
        <Modal visible={showModal} animationType="slide">
          {modalContent}
        </Modal>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
