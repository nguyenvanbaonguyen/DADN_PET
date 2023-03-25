import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import useModal from '~/hooks/useModal';
import {navigate} from '~/navigators/globalNav';
import FeedPortion from './FeedPortion';
import ImmediateClean from './ImmediateClean';
import ImmediateFeed from './ImmediateFeed';

const devices = [
  {
    index: 1,
    name: 'Pet Cleaner C1',
    type: 'clean',
  },
  {
    index: 2,
    name: 'Pet Feeder M1',
    type: 'feed',
  },
  {
    index: 3,
    name: 'Dispenser F2',
    type: 'feed',
  },
];

const Immediate = () => {
  const route = useRoute();
  const index = route.params.index - 1;
  return devices[index].type === 'feed' ? (
    <ImmediateFeed />
  ) : (
    <ImmediateClean />
  );
};

export default Immediate;
