import React, {memo} from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';

const ModalBase = ({closeModal, isOpen, children}: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}>
      <Pressable style={styles.centeredView} onPress={closeModal}>
        <Pressable style={styles.modalView}>{children}</Pressable>
      </Pressable>
      <View style={styles.backgroundModal} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  backgroundModal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 1,
    opacity: 0.3,
  },
});

export default memo(ModalBase);
