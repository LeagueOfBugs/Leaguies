import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {
  AddIcon,
  FormControl,
  Heading,
  Icon,
  Input,
  InputField,
  ButtonText,
  Button,
  FormControlLabel,
  FormControlLabelText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  ChevronDownIcon,
  SelectItem,
  HStack,
  VStack,
  Center,
} from '@gluestack-ui/themed';
import SectionContainer from '../../components/SectionContainer';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import uuid from 'react-native-uuid';
import useSeasonDispatch from '../../hooks/useSeasonDispatch';
import {useSelector} from 'react-redux';
import {selectLeagues} from '../../selectors/leagueSelector';

const numberSelector = () => {
  const selectItemArray = [];
  for (let i = 0; i <= 25; i++) {
    selectItemArray.push(<SelectItem label={`${i}`} value={`${i}`} key={i} />);
  }
  return selectItemArray;
};

const initialState = {
  id: '',
  name: '',
  start: '',
  end: '',
  games: 0,
  cadence: '',
};

const LeagueSeasonTab = ({navigation, route}) => {
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState(new Date());
  const [newSeason, setNewSeason] = useState(initialState);

  const {makeSeason} = useSeasonDispatch();
  const {leagues} = useSelector(selectLeagues);
  const {id} = route.params.item;
  const leagueId = id;

  const generateUUID = () => uuid.v4().toString();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const startEndRender = () => {
    if (newSeason.start.length === 0 && newSeason.end.length === 0) {
      return 'a start ';
    } else if (newSeason.start.length > 0 && newSeason.end.length === 0) {
      return 'an end ';
    }
  };

  const handleSubmit = () => {
    const start = newSeason.start;
    const end = newSeason.end;
    const dateString = date.toISOString();
    if (start.length === 0 && end.length === 0) {
      setNewSeason({...newSeason, start: dateString});
    } else if (end.length === 0) {
      setNewSeason({...newSeason, end: dateString});
    }
    const resetDate = new Date();
    setDate(resetDate);
  };

  const editDates = () => {
    setNewSeason({
      ...newSeason,
      start: '',
      end: '',
    });
  };

  const generateSeasonModel = () => {
    return {
      ...newSeason,
      id: generateUUID(),
      leagueId: leagueId,
    };
  };

  // const hitReset = () => {
  //   setNewSeason(initialState);
  // };

  const createSeasonOnSubmit = () => {
    const seasonModel = generateSeasonModel();
    makeSeason(seasonModel, leagues, leagueId);
    navigation.navigate('Schedule', {seasonModel});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {showForm ? (
          <View style={styles.formContainer}>
            <SectionContainer title="New Season">
              <FormControl>
                <Input>
                  <InputField
                    value={newSeason.name}
                    placeholder="Name"
                    style={styles.text}
                    onChangeText={input =>
                      setNewSeason({...newSeason, name: input})
                    }
                  />
                </Input>
              </FormControl>
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText style={styles.text}>
                    Number of games
                  </FormControlLabelText>
                </FormControlLabel>
                <Select
                  selectedValue={newSeason.games.toString()}
                  onValueChange={input =>
                    setNewSeason(prev => ({
                      ...prev,
                      games: parseInt(input, 10),
                    }))
                  }>
                  <SelectTrigger>
                    <SelectInput placeholder="num" style={styles.text} />
                    <Icon as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <ScrollView>{numberSelector()}</ScrollView>
                  </SelectPortal>
                </Select>
              </FormControl>
              {newSeason.start.length > 0 && newSeason.end.length > 0 ? (
                <Button onPress={editDates}>
                  <ButtonText>Edit Dates</ButtonText>
                </Button>
              ) : (
                <>
                  <HStack>
                    <VStack>
                      <Text style={styles.text}>
                        Pick {startEndRender()}
                        date
                      </Text>
                      <DatePicker
                        date={date}
                        onDateChange={setDate}
                        mode="date"
                        minimumDate={new Date()}
                      />
                    </VStack>
                    <Center>
                      <VStack space="lg">
                        <Button onPress={handleSubmit}>
                          <ButtonText>Submit {}</ButtonText>
                        </Button>
                      </VStack>
                    </Center>
                  </HStack>
                </>
              )}
              <Button onPress={createSeasonOnSubmit}>
                <ButtonText>Create Season</ButtonText>
              </Button>
            </SectionContainer>
          </View>
        ) : (
          <Pressable style={styles.subContainer} onPress={toggleForm}>
            <Icon as={AddIcon} m="$2" w="$10" h="$10" color="#ffffff" />
            <Heading style={styles.text}>Start a Season</Heading>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1D',
    height: '100%',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: '#252526',
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    color: '#ffffff',
  },
});

export default LeagueSeasonTab;
