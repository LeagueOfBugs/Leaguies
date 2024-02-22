import {Text, Image, StyleSheet, SafeAreaView, View} from 'react-native';
import React, {memo} from 'react';
import ActionButton from '../../components/actionButton';

const Details = ({league}) => {
  console.log('in Details');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={styles.badgeContainer}>
          {/* <Image /> */}
          <View style={styles.badge} />
        </View>
        <View>
          <Text style={[styles.centerText, styles.title]}>{league.name}</Text>
          <View style={styles.playerInformation}>
            <Text style={[styles.centerText, styles.lowPrio]}>
              {league.sport}
            </Text>
            <Text style={[styles.centerText, styles.lowPrio]}>
              {league.type}
            </Text>
          </View>
          <View style={styles.quickActionContainer}>
            <ActionButton
              handleCallback={() => console.log('working')}
              title="REQUEST TO JOIN"
            />
            <ActionButton
              handleCallback={() => console.log('working')}
              title="FOLLOW"
            />
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
  lowPrio: {
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: 5,
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
  playerInformation: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default memo(Details);
