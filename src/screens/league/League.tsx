import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import LeagueList from './LeagueList';
import SectionContainer from '../../components/SectionContainer';
import {AddIcon, Fab, FabIcon, FabLabel, VStack} from '@gluestack-ui/themed';

const League = ({navigation}) => {
  const {leagues} = useSelector((state: RootState) => state.leagues);

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <VStack space="md" style={styles.margin}>
        <SectionContainer title="My League">
          <Text>Season Title</Text>
        </SectionContainer>
        <SectionContainer title="Leagues">
          <LeagueList leagues={leagues} navigation={navigation} />
        </SectionContainer>
      </VStack>
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
  margin: {
    marginTop: 20,
  },
});

export default League;
