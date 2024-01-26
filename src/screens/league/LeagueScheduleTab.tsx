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
import {
  selectSeasons,
  selectSeasonsObjByLeagueId,
} from '../../selectors/seasonSelector';
import useMatchDispatch from '../../hooks/useMatchDispatch';
import {selectMatches} from '../../selectors/matchSelector';
import DatePicker from 'react-native-date-picker';
import {selectTeams} from '../../selectors/teamsSelector';
import {format} from 'date-fns';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {selectLeagueById} from '../../selectors/leagueSelector';

const LeagueScheduleTab = ({route}) => {
  // league id
  const {id} = route.params.item;
  const data = route.params;
  const league = useSelector(selectLeagueById(id));
  const leagueId = league?.id;
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
    location: '',
    offictiating: [],
  });

  useEffect(() => {
    Geolocation.requestAuthorization('whenInUse').then(result => {
      if (result === 'granted') {
        // Get current location
        Geolocation.getCurrentPosition(
          position => {
            return setLocation(position.coords);
          },
          err => {
            setError(err.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        setError('Location permission denied');
      }
    });

    // Clean up on component unmount
    return () => {
      Geolocation.stopObserving();
    };
  }, []);

  const [seasonModel] = useSelector(selectSeasonsObjByLeagueId(leagueId));
  const {matches} = useSelector(selectMatches);
  const {seasons} = useSelector(selectSeasons);
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

  const handleCreateMatch = () => {
    const newMatchModel = createMatchModel();
    makeMatch(newMatchModel, seasons);
    setShowModal(false);
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
                    <FormControlLabelText>Location</FormControlLabelText>
                  </FormControlLabel>
                  {/* <Input>
                    <InputField value={newMatch.location} />
                  </Input> */}
                  <GooglePlacesAutocomplete
                    placeholder="Search for a location"
                    onPress={(data, details = null) => {
                      // 'data' contains information about the selected place
                      // 'details' contains more details about the place
                      setNewMatch({
                        ...newMatch,
                        location: data.description,
                      });
                    }}
                    query={{
                      key: 'AIzaSyBGIr75oXUdjdwffvo1Q0ROKftQK0FOUJ4',
                      language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    debounce={300}
                  />
                </FormControl>
              </VStack>
              <Button
                mt="$4"
                onPress={() => {
                  handleCreateMatch();
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
