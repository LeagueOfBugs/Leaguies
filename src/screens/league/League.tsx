import {Text, TextInput, Button, SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {createLeague} from '../../store/reducers/leagues/leagueSlice';
import LeagueList from '../../components/LeagueList';
import SectionContainer from '../../components/SectionContainer';
import {AddIcon, Fab, FabIcon, FabLabel} from '@gluestack-ui/themed';

interface LeagueProps {
  navigation: any;
}
const League = ({navigation}) => {
  const [leagueName, setLeagueName] = useState('');
  const {leagues} = useSelector((state: RootState) => state.leagues);

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SectionContainer title="Leagues">
        <LeagueList leagues={leagues} navigation={navigation} />
      </SectionContainer>
      <Fab
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => navigation.navigate('Create League')}>
        <FabIcon as={AddIcon} mr="$1" />
        <FabLabel>Create a League</FabLabel>
      </Fab>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1C1C1D',
    height: '100%',
  },
  whiteFont: {
    color: '#ffffff',
  },
});

export default League;
