import React, {useCallback, useRef, useState} from 'react';
import {Alert, Pressable, StyleSheet, View} from 'react-native';
import {FlatList, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Animated, {min} from 'react-native-reanimated';
import CalendarCustom from '~/components/Calendar/CalendarCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import useModal from '~/hooks/useModal';

const Test = () => {
  const {openModal, Modal} = useModal();
  const datesRef = useRef({});

  console.log(datesRef.current);
  return (
    <ViewCustom layout="ml-10 mt-20 jc-c ai-c w-f h-f">
      <Modal>
        <CalendarCustom datesRef={datesRef} />
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={openModal}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginTop: -20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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

export default Test;
