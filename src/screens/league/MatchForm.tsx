import {Text, TextInput, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Forms from '../../components/Forms';
import {FormInput} from '../../components/FormInput';
import {Selector} from '../../components/Selector';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import useMatchDispatch from '../../hooks/useMatchDispatch';
import usePlayerDetails from '../../hooks/usePlayerDetails';
import uuid from 'react-native-uuid';

/*
TODO:
officiating
location google API
populating teams
fix date issues schedule records match 1 day prior to set date
*/

const MatchForm = () => {
  const {season, league} = usePlayerDetails();
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [date] = useState(new Date());
  const [matchDetails, setMatchDetails] = useState({
    name: '',
    date: '',
    location: '',
    homeTeam: '',
    awayTeam: '',
    officiating: [],
  });
  const {makeMatch} = useMatchDispatch();
  const navigation = useNavigation();

  // save new match to state
  const handleContinue = () => {
    const formatDate = format(matchDetails.date, 'yyyy-MM-dd');
    const formatTime = format(matchDetails.date, 'HH:mm:ss');

    // create match object
    const matchModel = {
      ...matchDetails,
      leagueId: league?.id,
      seasonId: season?.id,
      id: uuid.v4().toString(),
      date: formatDate,
      time: formatTime,
    };
    makeMatch(matchModel);
    navigation.navigate('Schedule' as never);
  };

  // cancel match creation anvigate back to schedule
  const handleCancel = () => {
    navigation.navigate('Schedule' as never);
  };

  return (
    <>
      <Forms
        title="Match Details"
        handleContinue={handleContinue}
        handleCancel={handleCancel}>
        <>
          <FormInput>
            <TextInput
              placeholder="Name"
              value={matchDetails.name}
              onChangeText={input =>
                setMatchDetails({...matchDetails, name: input})
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              placeholder="Location"
              value={matchDetails.location}
              onChangeText={input =>
                setMatchDetails({...matchDetails, location: input})
              }
            />
          </FormInput>
          <FormInput>
            <Pressable onPress={() => setVisibleDatePicker(true)}>
              <Text style={styles.type}>Start Date</Text>
            </Pressable>
          </FormInput>
          <FormInput>
            <TextInput
              placeholder="Home team"
              value={matchDetails.homeTeam}
              onChangeText={input =>
                setMatchDetails({...matchDetails, homeTeam: input})
              }
            />
          </FormInput>
          <FormInput>
            <TextInput
              placeholder="Away team"
              value={matchDetails.awayTeam}
              onChangeText={input =>
                setMatchDetails({...matchDetails, awayTeam: input})
              }
            />
          </FormInput>
        </>
      </Forms>
      <Selector visible={visibleDatePicker} setVisible={setVisibleDatePicker}>
        <Text>Start Time</Text>
        <DatePicker
          date={date}
          onDateChange={input => {
            setMatchDetails({
              ...matchDetails,
              date: input.toISOString(),
            });
          }}
        />
        <Pressable onPress={() => setVisibleDatePicker(false)}>
          <Text>submit</Text>
        </Pressable>
      </Selector>
    </>
  );
};

const styles = StyleSheet.create({
  pressable: {paddingVertical: 10},
  selection: {
    fontSize: 20,
    textAlign: 'center',
    color: '#00A1C9',
  },
  type: {
    color: '#808080',
    fontWeight: '300',
  },
});
export default MatchForm;
