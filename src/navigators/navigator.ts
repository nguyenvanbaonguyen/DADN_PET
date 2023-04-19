import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export type NavigatorProps = {
  navigation?: NavigationProp<ReactNavigation.RootParamList>;
  route?: RouteProp<ParamListBase, string>;
};
