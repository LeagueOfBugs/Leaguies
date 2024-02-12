import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Forms from '../../components/Forms';
import {FormInput} from '../../components/FormInput';
import {Selector} from '../../components/Selector';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {Switch} from 'react-native-paper';
const types = [
  {
    id: 1,
    value: 'coed',
  },
  {
    id: 2,
    value: 'Men only',
  },
  {
    id: 3,
    value: 'Women only',
  },
];

const MatchForm = () => {
  const [steps, setSteps] = useState({current: 1, outOf: 2});
  const [visible, setVisible] = React.useState(false);
  const [visibleDatePicker, setVisibleDatePicker] = React.useState(false);
  const [repeat, showRepeat] = React.useState(false);
  const [date, setDate] = useState(new Date());
  const [matchDetails, setMatchDetails] = useState({
    name: '',
    location: '',
    type: '',
    startDate: '',
    allDayEvent: 'false',
    endDate: '',
    repeats: '',
    numOfMatches: '',
    randomize: 'false',
    homeTeam: '',
    awayTeam: '',
  });

  const navigation = useNavigation();

  const renderSteps = () => {
    let formattedStart;
    let formattedEnd;

    if (matchDetails.startDate) {
      const startDate = new Date(matchDetails.startDate);
      formattedStart = format(startDate, 'yyyy-dd-MM');
    }
    if (matchDetails.endDate) {
      const endDate = new Date(matchDetails.endDate);
      formattedEnd = format(endDate, 'yyyy-dd-MM');
    }

    if (steps.current === 1) {
      return (
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
          <FormInput selection={matchDetails.type}>
            <Pressable onPress={() => setVisible(true)}>
              <Text style={styles.type}>Type</Text>
            </Pressable>
          </FormInput>
          <FormInput selection={formattedStart}>
            <Pressable onPress={() => setVisibleDatePicker(true)}>
              <Text style={styles.type}>Start Date</Text>
            </Pressable>
          </FormInput>
          <FormInput selection={formattedEnd}>
            <Pressable onPress={() => setVisibleDatePicker(true)}>
              <Text style={styles.type}>End date</Text>
            </Pressable>
          </FormInput>
          <FormInput>
            <Pressable onPress={() => setVisible(true)}>
              <Text style={styles.type}>Repeats</Text>
            </Pressable>
          </FormInput>
        </>
      );
    } else {
      return (
        <>
          <FormInput>
            <TextInput
              placeholder="Number of matches"
              keyboardType="number-pad"
              inputMode="numeric"
              value={matchDetails.numOfMatches}
              onChangeText={input =>
                setMatchDetails({...matchDetails, numOfMatches: input})
              }
            />
          </FormInput>
          <FormInput>
            <Text>Randomize opponents</Text>
            <Switch
              value={matchDetails.randomize}
              onValueChange={input => {
                setMatchDetails({
                  ...matchDetails,
                  randomize: input,
                });
              }}
            />
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
      );
    }
  };

  const handleContinue = () => {
    setSteps({
      ...steps,
      current: steps.current + 1,
    });
  };

  const handleCancel = () => {
    navigation.navigate('Schedule');
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={[styles.pressable]}
        onPress={() => {
          setVisible(false);
          setMatchDetails({...matchDetails, type: item.value});
        }}>
        <Text style={styles.selection}>{item.value}</Text>
      </Pressable>
    );
  };

  return (
    <>
      <Forms
        title="Match Details"
        steps={steps}
        handleContinue={handleContinue}
        handleCancel={handleCancel}>
        <>{renderSteps()}</>
      </Forms>
      <Selector visible={visible} setVisible={setVisible}>
        <FlatList
          data={types}
          extraData={matchDetails.type}
          renderItem={renderItem}
        />
      </Selector>
      <Selector visible={visibleDatePicker} setVisible={setVisibleDatePicker}>
        <Text>Start Time</Text>
        <DatePicker
          date={date}
          onDateChange={input => {
            setMatchDetails({
              ...matchDetails,
              startDate: input,
            });
          }}
        />
        <Text>End Time</Text>
        <DatePicker
          date={matchDetails.startDate || date}
          onDateChange={input => {
            setMatchDetails({
              ...matchDetails,
              endDate: input,
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
