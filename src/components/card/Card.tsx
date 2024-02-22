import {View, StyleSheet, Pressable} from 'react-native';
import React, {ReactNode, memo} from 'react';
import {Divider, Text} from 'react-native-paper';

interface CardProps {
  children?: ReactNode;
  title: string;
  subTitle?: string;
  footerText?: string;
}

const Card = ({
  children,
  title,
  subTitle,
  footerText,
  handleFooterPress,
}: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.secHeaderContainer}>
          <View style={styles.defaultImage} />
          <View style={styles.subHeader}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
        {/* <Text style={styles.link}>See All</Text> */}
      </View>
      <Divider style={styles.topDivider} />
      {/* <View style={styles.main}> */}
      {children ? (
        children
      ) : (
        <View style={styles.mainDefault}>
          <Text>Empty State</Text>
        </View>
      )}
      {/* </View> */}
      {footerText && (
        <>
          <Divider style={styles.bottomDivider} />
          <Pressable style={styles.footer} onPress={() => handleFooterPress()}>
            <Text style={styles.footerText}>{footerText}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeader: {
    paddingLeft: 10,
  },
  main: {
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  mainDefault: {
    alignItems: 'center',
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  defaultImage: {
    height: 20,
    width: 20,
    backgroundColor: '#B1B1B1',
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 15,
    color: '#757575',
  },
  topDivider: {
    height: 1,
    backgroundColor: '#C2C2C2',
    marginTop: 10,
    marginBottom: 5,
  },
  link: {
    fontSize: 12,
    color: '#757575',
  },
  bottomDivider: {
    height: 1,
    backgroundColor: '#C2C2C2',
    marginTop: 5,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#757575',
    fontWeight: '300',
  },
});
export default memo(Card);
