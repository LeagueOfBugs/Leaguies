import {View, StyleSheet, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  FabLabel,
  EditIcon,
  Fab,
  Text,
  VStack,
  AddIcon,
  Center,
} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import AddPlayer from '../../components/AddPlayer';
import EditPlayer from '../../components/EditPlayer';

type Placement = 'bottom right' | 'bottom left';

const Player = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<JSX.Element | null>(null);

  const {players} = useSelector((state: RootState) => state.players);
  const player = players.find(
    el => el.id === '905b4d32-ee84-4d1d-8d88-2d14416cfab8',
  );

  const handlePress = (placement: Placement) => {
    setShowModal(true);
    switch (placement) {
      case 'bottom right':
        setModalType(<EditPlayer onClose={() => setShowModal(false)} />);
        break;
      case 'bottom left':
        setModalType(<AddPlayer onClose={() => setShowModal(false)} />);
        break;
      default:
        setModalType(null);
    }
  };

  return (
    <View style={styles.container}>
      <VStack space="2xl" style={styles.vStackContainer}>
        <Avatar bgColor="$amber600" size="md" borderRadius="$full">
          <AvatarFallbackText>{player?.name}</AvatarFallbackText>
          <AvatarImage />
        </Avatar>
        <Text>{player?.name}</Text>
        <Text>{player?.position}</Text>
        <Text>{player?.team}</Text>
      </VStack>
      <Fab
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => handlePress('bottom right')}>
        <Icon as={EditIcon} color="white" m="$1" w="$4" h="$4" />
        <FabLabel>Edit Player</FabLabel>
      </Fab>
      <Fab
        size="md"
        placement="bottom left"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => handlePress('bottom left')}>
        <Icon as={AddIcon} color="white" m="$1" w="$4" h="$4" />
        <FabLabel>Add Player</FabLabel>
      </Fab>
      <Center style={styles.modalContainer}>
        <Modal visible={showModal} animationType="slide">
          {modalType}
        </Modal>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  vStackContainer: {
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

export default Player;
