import {useRoute} from '@react-navigation/native';
import React from 'react';
import ImmediateClean from './ImmediateClean';
import ImmediateFeed from './ImmediateFeed';
import ImmediateWater from './ImmediateWater';

// const devices = [
//   {
//     index: 1,
//     name: 'Pet Cleaner C1',
//     type: 'clean',
//   },
//   {
//     index: 2,
//     name: 'Pet Feeder M1',
//     type: 'feed',
//   },
//   {
//     index: 3,
//     name: 'Dispenser F2',
//     type: 'feed',
//   },
// ];

const Immediate = () => {
  const route = useRoute();
  const type = route?.params?.type;
  return type === 'food' ? (
    <ImmediateFeed />
  ) : type === 'water' ? (
    <ImmediateWater />
  ) : (
    <ImmediateClean />
  );
};

export default Immediate;
