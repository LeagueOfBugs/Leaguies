import {View, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  AddIcon,
  Fab,
  FabIcon,
  FabLabel,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  Heading,
  Text,
  VStack,
  Input,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputField,
} from '@gluestack-ui/themed';
import LeagueCalendar from '../../components/Calendar';
import uuid from 'react-native-uuid';
import {useSelector} from 'react-redux';
import {selectSeasonsObjByLeagueId} from '../../selectors/seasonSelector';
import useMatchDispatch from '../../hooks/useMatchDispatch';
import {selectMatches} from '../../selectors/matchSelector';

const LeagueScheduleTab = ({route}) => {
  const {id} = route.params.item;
  const [seasonModel] = useSelector(selectSeasonsObjByLeagueId(id));
  const matchesState = useSelector(selectMatches);
  console.log('mattcccccheesss:', matchesState);
  const [showModal, setShowModal] = useState(false);
  const [newMatch, setNewMatch] = useState({
    name: '',
    homeTeam: '',
    awayTeam: '',
    date: '',
    time: '',
    localtion: '',
    offictiating: [],
  });
  const {makeMatch} = useMatchDispatch();
  const data = route.params;
  const createMatchModel = () => {
    return {
      id: uuid.v4().toString(),
      seasonId: seasonModel.id,
      leagueId: id,
      ...newMatch,
    };
  };
  const handleCreateTeam = () => {
    setShowModal(false);
    const newMatchState = [];
    makeMatch(newMatchState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <LeagueCalendar markedDates={data} route={route} />
        <Fab
          onPress={() => setShowModal(true)}
          size="md"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}>
          <FabIcon as={AddIcon} mr="$1" />
          <FabLabel>Add a Game</FabLabel>
        </Fab>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}>
          <ModalBackdrop />
          <ModalContent maxWidth="$96">
            <ModalBody p="$5">
              <VStack space="xs" mb="$4">
                <Heading>New match</Heading>
                {/* <Text size="sm">Create a match</Text> */}
              </VStack>
              <VStack py="$2" space="xl">
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Name</FormControlLabelText>
                  </FormControlLabel>
                  <Input>
                    <InputField value="The Kings Cup" />
                  </Input>
                </FormControl>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Away team</FormControlLabelText>
                  </FormControlLabel>
                  {/* 
               
               Need to create selector
               */}
                </FormControl>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Date and time</FormControlLabelText>
                  </FormControlLabel>
                </FormControl>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>location</FormControlLabelText>
                  </FormControlLabel>
                </FormControl>
              </VStack>
              <Button
                mt="$4"
                onPress={() => {
                  handleCreateTeam();
                }}>
                <ButtonText>Create Match!</ButtonText>
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
  },
});
export default LeagueScheduleTab;
