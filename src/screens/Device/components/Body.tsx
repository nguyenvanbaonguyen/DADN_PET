import {useRoute} from '@react-navigation/native';
import React from 'react';
import BodyFeed from './BodyFeed';
import BodyClean from './BodyClean';
import BodyWater from './BodyWater';

const Body = () => {
  const route = useRoute();
  const type = route?.params?.type;
  return type === 'food' ? (
    <BodyFeed />
  ) : type === 'water' ? (
    <BodyWater />
  ) : (
    <BodyClean />
  );
};

export default Body;
