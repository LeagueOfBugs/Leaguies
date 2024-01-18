import {View, StyleSheet} from 'react-native';
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
} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';

type Placement = 'bottom right' | 'bottom left';

const Player = () => {
  const [showModal, setShowModal] = useState(false);

  const {players} = useSelector((state: RootState) => state.players);
  const player = players.find(el => {
    if (el.id === '905b4d32-ee84-4d1d-8d88-2d14416cfab8') {
      return el;
    }
  });

  const handlePress = (placement: Placement) => {
    setShowModal(true);
    switch (placement) {
      case 'bottom right':
        // Return edit player modal view
        break;
      case 'bottom left':
        // Return add player modal view
        break;
      // Add more cases if needed
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <VStack space="2xl" style={styles.vStackContainer}>
        <Avatar bgColor="$amber600" size="md" borderRadius="$full">
          <AvatarFallbackText>{player.name}</AvatarFallbackText>
          <AvatarImage />
        </Avatar>
        <Text>{player.name}</Text>
        <Text>{player.position}</Text>
        <Text>{player.team}</Text>
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
});

export default Player;
