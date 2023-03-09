import {DrawerHeaderProps} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import {navigate} from '~/navigators/globalNav';
import ViewCustom from '../ViewCustom/ViewCustom';

const Header = ({navigation}: DrawerHeaderProps) => {
  return (
    <ViewCustom layout="h-60 fd-r ai-c jc-b px-15" style={style.borderHeader}>
      <Image
        source={require(`~/assets/images/petHeader.png`)}
        style={style.imageStyle}
      />
      <ViewCustom layout="fd-r ai-c">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('Notification')}>
          <IconAnt size={25} color="black" name="bells" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.openDrawer()}>
          <IconIon
            size={30}
            color="black"
            name="menu"
            style={style.iconRight}
          />
        </TouchableOpacity>
      </ViewCustom>
    </ViewCustom>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 150,
  },
  iconRight: {
    marginLeft: 15,
  },
  borderHeader: {
    borderBottomColor: '#E8EDF1',
    borderBottomWidth: 1,
  },
});

export default Header;
