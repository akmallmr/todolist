import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View, Text} from 'react-native';
import {Transition} from 'react-native-reanimated';


import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import FeedNavigator from './FeedNavigator';
import ProfileNavigator from './ProfileNavigator';
import SettingNavigator from './SettingNavigator';

import Home from '../screens/Home/Home';
import Feed from '../screens/Feed/Feed';
import Setting from '../screens/Setting/Setting';

const FadeTransition = (index, position) => {
  const sceneRange = [index - 1, index];
  const outputOpacity = [0, 1];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity,
  });

  return {
    opacity: transition,
  };
};

const BottomTransition = (index, position) => {
  const sceneRange = [index - 1, index];
  const outputHeight = [height, 0];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputHeight,
  });

  return {
    transform: [{translateY: transition}],
  };
};

const NavigationConfig = () => {
  return {
    screenInterpolator: sceneProps => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      // const height = sceneProps.layout.initHeight;

      return FadeTransition(index, position);
      // return BottomTransition(index, position, height);
    },
  };
};

const DashboardTabNavigation = createBottomTabNavigator({
  Home: {screen: Home}, //Harus Screen

  Feed: {screen: Feed}, //Harus Screen
  Setting: {screen: Setting}, //Harus Screen
},
{
  navigationOptions: ({navigation}) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
      return {
        headerTitle: routeName,
      };
  }
});

const DashboardStackNavigation = createStackNavigator({
  DashboardTabNavigation: DashboardTabNavigation
},
{
  transitionConfig: NavigationConfig,
  headerLayoutPreset: 'center'
})

const AppDrawerNavigation = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigation
  },
  
  Profile: {
    screen: ProfileNavigator
  }
});
//   Home: {
//     screen: HomeNavigator,
//       navigationOptions: () => ({
//         title: 'Home',
//       }),
//     },
//     Feed: {
//       screen: FeedNavigator,
//       navigationOptions: () => ({
//         title: 'Feed',
//       }),
//     },
//     Profile: {screen: ProfileNavigator},
//     Setting: {screen: SettingNavigator},
//   },
//   {
//     initialRouteName: 'Home',
//     transitionConfig: NavigationConfig,
//     // headerMode:"none",
//     headerLayoutPreset: 'center',
// });

const RootApp = createSwitchNavigator(
  {
    Auth: {screen: AuthNavigator},
    Main: {screen: AppDrawerNavigation},
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
  },
);

export default createAppContainer(RootApp);
