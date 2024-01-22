import {StyleSheet, Dimensions, View} from 'react-native';
import React, {useState} from 'react';
import {
  ChevronDownIcon,
  FormControl,
  Icon,
  Input,
  InputField,
  Select,
  SelectInput,
  SelectPortal,
  SelectTrigger,
  SelectItem,
  Button,
  ButtonText,
  SelectContent,
  FormControlLabel,
  FormControlLabelText,
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';
import {useSelector} from 'react-redux';
import {selectTeamsNoLeague} from '../../selectors/teamsSelector';
import SectionContainer from '../../components/SectionContainer';
import useLeagueDispatch from '../../hooks/useDeleteTeamToLeague';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const LeagueObject: League = {
  name: '',
  image: '',
  badge: '',
  teams: [],
  limit: '',
};
const CreateLeague = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [newLeague, setNewLeague] = useState(LeagueObject);
  const leaguelessTeams = useSelector(selectTeamsNoLeague);
  const {CreateLeague} = useLeagueDispatch();
  const navigation = useNavigation();
  /* 
  TODO:
  make sure multiple team ids dont end up in league
  */
  const numberSelector = (number: number) => {
    const selectItemArray = [];
    for (let i = 0; i <= number; i++) {
      selectItemArray.push(
        <SelectItem label={`${i}`} value={`${i}`} key={i} />,
      );
    }
    return selectItemArray;
  };

  const loadTeams = (teams: Team[]) => {
    const teamsArray = [];
    for (const team of teams) {
      teamsArray.push(
        <SelectItem
          label={`${team.name}`}
          value={{id: team.id, name: team.name}}
          key={team.id}
        />,
      );
    }
    return teamsArray;
  };

  const handleSubmit = () => {
    CreateLeague(newLeague);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainers}>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText style={styles.text}>
              Team name
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="team name"
              style={styles.text}
              onChangeText={e => setNewLeague(prev => ({...prev, name: e}))}
            />
          </Input>
        </FormControl>
      </View>
      <View style={styles.subContainers}>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText style={styles.text}>
              Number of teams
            </FormControlLabelText>
          </FormControlLabel>
          <Select
            value={newLeague.limit}
            onValueChange={e => setNewLeague(prev => ({...prev, limit: e}))}>
            <SelectTrigger>
              <SelectInput placeholder="num" style={styles.text} />
              <Icon as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectContent>{numberSelector(12)}</SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>
      </View>
      <View style={styles.subContainers}>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText style={styles.text}>
              Add Team(s)
            </FormControlLabelText>
          </FormControlLabel>
          <Select
            value={selectedTeams}
            onValueChange={e => {
              setSelectedTeams(prev => [...prev, e.name]);
              setNewLeague(prev => ({...prev, teams: [...prev.teams, e.id]}));
            }}>
            <SelectTrigger>
              <SelectInput placeholder="teams" style={styles.text} />
              <Icon as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectContent>{loadTeams(leaguelessTeams)}</SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>
        <SectionContainer title="selected teams">
          {selectedTeams.map(team => {
            return (
              <View
                key={team}
                style={{
                  width: 150,
                  padding: 10,
                  alignContent: 'center',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}>
                <Badge
                  size="sm"
                  variant="outline"
                  borderRadius="$full"
                  action="info">
                  <BadgeText>{team}</BadgeText>
                </Badge>
              </View>
            );
          })}
        </SectionContainer>
      </View>
      <View style={styles.subContainers}>
        <FormControl>
          <Button bg="$darkBlue600" onPress={() => handleSubmit()}>
            <ButtonText fontSize="$sm" fontWeight="$medium">
              Next
            </ButtonText>
          </Button>
        </FormControl>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    width: 420,
    alignSelf: 'center',
    backgroundColor: '#252526',
    flex: 1,
    marginBottom: 60,
    marginTop: 20,
  },
  subContainers: {
    height: 'auto',
    // marginTop: 5,
    marginBottom: 20,
  },
  text: {
    color: '#ffffff',
  },
});

export default CreateLeague;
