import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  Center,
  VStack,
  Input,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputField,
  Select,
  SelectPortal,
  SelectTrigger,
  SelectInput,
  Icon,
  ChevronDownIcon,
  SelectItem,
} from '@gluestack-ui/themed';
import LeagueCalendar from '../../components/Calendar';
import uuid from 'react-native-uuid';
import {useSelector} from 'react-redux';
import {selectSeasonsObjByLeagueId} from '../../selectors/seasonSelector';
import useMatchDispatch from '../../hooks/useMatchDispatch';
import {selectMatches} from '../../selectors/matchSelector';
import DatePicker from 'react-native-date-picker';
import {selectTeams} from '../../selectors/teamsSelector';
import {format} from 'date-fns';
import Geolocation from 'react-native-geolocation-service';

const LeagueScheduleTab = ({route}) => {
  // league id
  const {id} = route.params.item;
  const data = route.params;
  const {teams} = useSelector(selectTeams);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  // const matchesState = useSelector(selectMatches);
  const [date, setDate] = useState(new Date());
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

  // useEffect(() => {
  //   Geolocation.requestAuthorization('whenInUse').then(result => {
  //     if (result === 'granted') {
  //       // Get current location
  //       Geolocation.getCurrentPosition(
  //         position => {
  //           setLocation(position.coords);
  //         },
  //         err => {
  //           setError(err.message);
  //         },
  //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //       );
  //     } else {
  //       setError('Location permission denied');
  //     }
  //   });

  //   // Clean up on component unmount
  //   return () => {
  //     Geolocation.stopObserving();
  //   };
  // }, []);

  const [seasonModel] = useSelector(selectSeasonsObjByLeagueId(id));
  const opsModels = teams.filter(team => team.league === id && team.league);
  const selectNames = opsModels.map(ops => ({
    name: ops.name,
    id: ops.id,
  }));

  const {makeMatch} = useMatchDispatch();

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

  // can be memoized, otherwise will create lists every render
  const teamSelector = () => {
    const selectItemArray = [];
    for (let i = 0; i <= selectNames.length - 1; i++) {
      selectItemArray.push(
        <SelectItem
          label={`${selectNames[i].name}`}
          value={`${selectNames[i].id}`}
          key={selectNames[i].id}
        />,
      );
    }
    return selectItemArray;
  };

  const formatMatchDateTime = val => {
    const formattedDate = format(val, 'yyyy-MM-dd');
    const formattedTime = format(val, 'h:mm:ss a');
    setNewMatch({
      ...newMatch,
      date: formattedDate,
      time: formattedTime,
    });
  };

  console.log(newMatch);

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
              </VStack>
              <VStack py="$2" space="xl">
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Name</FormControlLabelText>
                  </FormControlLabel>
                  <Input>
                    <InputField
                      value={newMatch.name}
                      onChangeText={input =>
                        setNewMatch({
                          ...newMatch,
                          name: input,
                        })
                      }
                    />
                  </Input>
                </FormControl>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Home team</FormControlLabelText>
                  </FormControlLabel>
                  <Select
                    selectedValue={newMatch.homeTeam.toString()}
                    onValueChange={input =>
                      setNewMatch({
                        ...newMatch,
                        homeTeam: input,
                      })
                    }>
                    <SelectTrigger>
                      <SelectInput
                        placeholder="Home team"
                        style={styles.text}
                      />
                      <Icon as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal style={styles.selectContainer}>
                      <Center>{teamSelector()}</Center>
                    </SelectPortal>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Away team</FormControlLabelText>
                  </FormControlLabel>
                  <Select
                    selectedValue={newMatch.awayTeam.toString()}
                    onValueChange={input =>
                      setNewMatch({
                        ...newMatch,
                        awayTeam: input,
                      })
                    }>
                    <SelectTrigger>
                      <SelectInput
                        placeholder="Away team"
                        style={styles.text}
                      />
                      <Icon as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal style={styles.selectContainer}>
                      <Center>{teamSelector()}</Center>
                    </SelectPortal>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Date and time</FormControlLabelText>
                  </FormControlLabel>

                  <DatePicker
                    date={date}
                    onDateChange={val => formatMatchDateTime(val)}
                    mode="datetime"
                    minimumDate={new Date()}
                  />
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
  text: {
    color: '#ffffff',
  },
  selectContainer: {
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    opacity: 0.9,
    marginTop: 400,
  },
});
export default LeagueScheduleTab;
