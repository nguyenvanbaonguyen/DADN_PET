import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeNav from './HomeNav';
import Header from '~/components/Header/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {resetNavigate} from './globalNav';
import SettingUser from '~/screens/SettingUser/SettingUser';
import ReportAboutPet from '~/screens/ReportAboutPet/ReportAboutPet';
import HistoryUser from '~/screens/HistoryUser/HistoryUser';
import Account from '~/screens/Account/Account';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log out" onPress={() => resetNavigate('AuthNav')} />
    </DrawerContentScrollView>
  );
}

function MainNav() {
  const insets = useSafeAreaInsets();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        header: Header,
        sceneContainerStyle: {
          backgroundColor: '#ffffff',
          paddingTop: insets.top - 10,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeNav"
        component={HomeNav}
        options={{title: 'Home'}}
      />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Report" component={ReportAboutPet} />
      <Drawer.Screen name="History" component={HistoryUser} />
      <Drawer.Screen name="Settings" component={SettingUser} />
    </Drawer.Navigator>
  );
}

export default MainNav;
