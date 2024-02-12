import * as React from 'react';
import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';

export const Selector = ({visible, setVisible, children}) => {
  const hideModal = () => setVisible(false);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={hideModal}>
      <View style={styles.modalOuterContainer}>
        {/* Background overlay */}
        <View style={styles.modalContainer}>
          {/* Modal content */}
          {/* <View style={styles.modalContent}> */}
          <Pressable onPress={hideModal}>
            <Text>Close</Text>
          </Pressable>
          {children}
          {/* </View> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOuterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContainer: {
    backgroundColor: '#C0c0c0',
    borderRadius: 30,
    padding: 20,
    paddingBottom: 50,
    // height: 300,
  },
  modalContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
