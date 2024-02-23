import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Forms from '../../../components/Forms';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Selector} from '../../../components/Selector';
import {FormInput} from '../../../components/FormInput';
import DatePicker from 'react-native-date-picker';

const SeasonForm = () => {
  const route = useRoute();
  const {leagueId} = route.params;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [seasonInfo, setSeasonInfo] = useState({
    name: '',
    location: 'Binghamton NY',
    start: '',
    leagueId: leagueId,
    end: '',
    games: '',
    cadence: '',
    fee: '100',
    skill: '',
    postSeason: true,
  });
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate('Season Logo', {season: seasonInfo});
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  const steps = {
    current: 1,
    outOf: 2,
  };
  return (
    <SafeAreaView style={styles.saContainer}>
      <View style={styles.container}>
        <Forms
          steps={steps}
          title="Season details"
          handleCancel={handleCancel}
          handleContinue={handleContinue}>
          <>
            <FormInput>
              <TextInput
                placeholder="Name"
                onChangeText={input =>
                  setSeasonInfo({
                    ...seasonInfo,
                    name: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Location"
                onChangeText={input =>
                  setSeasonInfo({
                    ...seasonInfo,
                    location: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <Pressable onPress={() => setShowDatePicker(true)}>
                <Text style={styles.type}>Start Date</Text>
              </Pressable>
            </FormInput>
            <FormInput>
              <Pressable onPress={() => setShowEndDatePicker(true)}>
                <Text style={styles.type}>End Date</Text>
              </Pressable>
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Number of games"
                onChangeText={input =>
                  setSeasonInfo({
                    ...seasonInfo,
                    games: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Cadence"
                onChangeText={input =>
                  setSeasonInfo({
                    ...seasonInfo,
                    cadence: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Fee"
                onChangeText={input =>
                  setSeasonInfo({
                    ...seasonInfo,
                    fee: input,
                  })
                }
              />
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Skill level"
                onChangeText={input =>
                  setSeasonInfo({
                    ...seasonInfo,
                    skill: input,
                  })
                }
              />
            </FormInput>
          </>
        </Forms>
        <Selector visible={showDatePicker} setVisible={setShowDatePicker}>
          <Text>Start Time</Text>
          <DatePicker
            date={date}
            onDateChange={input => {
              setSeasonInfo({
                ...seasonInfo,
                start: input.toISOString(),
              });
            }}
          />
          <Pressable onPress={() => setShowDatePicker(false)}>
            <Text>submit</Text>
          </Pressable>
        </Selector>
        <Selector visible={showEndDatePicker} setVisible={setShowEndDatePicker}>
          <Text>End Time</Text>
          <DatePicker
            date={date}
            onDateChange={input => {
              setSeasonInfo({
                ...seasonInfo,
                end: input.toISOString(),
              });
            }}
          />
          <Pressable onPress={() => setShowEndDatePicker(false)}>
            <Text>submit</Text>
          </Pressable>
        </Selector>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  type: {
    color: '#808080',
    fontWeight: '300',
  },
});

export default SeasonForm;
