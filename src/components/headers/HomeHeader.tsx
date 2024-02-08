import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
// Need to look into why header is adjusting its own height per screen
const Header = ({header}) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{color: 'white'}}>
        {header}
      </Text>
      <Image
        style={styles.image}
        src="/Users/andres/Desktop/leaguies/src/assets/icons/user.png"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: ,
    // paddingRight: 5,
    // height: 30,
  },
  image: {
    alignSelf: 'center',
    height: 22,
    width: 20,
  },
});
export default Header;
