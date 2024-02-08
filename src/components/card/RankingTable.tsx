import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Divider, Text} from 'react-native-paper';

const RankingTable = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.tableLabels]}>
        <View style={[styles.row, styles.tableLabelsLeft]}>
          <Text style={styles.pos}>Pos</Text>
          <View style={styles.posMarker} />
          <Text style={styles.club}>Club</Text>
        </View>
        <View style={[styles.row, styles.tableLabelsRight]}>
          <Text style={styles.textAlignCenter}>W</Text>
          <Text style={styles.textAlignCenter}>D</Text>
          <Text style={styles.textAlignCenter}>L</Text>
          <Text style={styles.textAlignCenter}>PTS</Text>
        </View>
      </View>
      <Divider style={styles.topDivider} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tableLabels: {
    width: '100%',
    justifyContent: 'space-between',
  },
  tableLabelsLeft: {
    flex: 1.5,
  },
  tableLabelsRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  club: {
    flex: 3,
  },
  textAlignCenter: {
    textAlign: 'center',
    flex: 1,
  },
  posMarker: {
    flex: 0.5,
  },
  pos: {
    flex: 1,
    textAlign: 'center',
  },
  topDivider: {
    height: 0.5,
    backgroundColor: '#C2C2C2',
    marginTop: 5,
  },
});
export default RankingTable;
