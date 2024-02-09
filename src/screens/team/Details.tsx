import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
// import {} from 'react-native-paper';
import usePlayerDetails from '../../hooks/usePlayerDetails';

const Details = () => {
  const {team} = usePlayerDetails();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={styles.badgeContainer}>
          {/* <Image /> */}
          <View style={styles.badge} />
        </View>
        <View style={styles.playerInformation}>
          <View>
            <Text style={[styles.centerText, styles.title]}>{team.name}</Text>
            <Text style={[styles.centerText, styles.sport]}>Sport</Text>
          </View>
          <View style={styles.quickActionContainer}>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor="#3E3E3E"
              style={styles.buttonContainer}
              onPress={() => console.log('working')}>
              <Text style={styles.buttons}>REQUEST TO JOIN</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor="#3E3E3E"
              style={styles.buttonContainer}
              onPress={() => console.log('working')}>
              <Text style={styles.buttons}>FOLLOW</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
  },
  playerContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  quickActionContainer: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  centerText: {
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 1,
  },
  sport: {
    fontSize: 16,
    fontWeight: '300',
  },
  badgeContainer: {},
  badge: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#3E3E3E',
  },
  buttons: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '300',
  },
  buttonContainer: {
    marginHorizontal: 5,
    backgroundColor: '#7E7E7E',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
  },
  playerInformation: {},
});

export default Details;
