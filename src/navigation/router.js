import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View, Text} from 'react-native';
import {Transition} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'



import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import FeedNavigator from './FeedNavigator';
import ProfileNavigator from './ProfileNavigator';
import SettingNavigator from './SettingNavigator';

import Home from '../screens/Home/Home';
import Feed from '../screens/Feed/Feed';
import Setting from '../screens/Setting/Setting';
import Edit from '../screens/Home/Edit/Edit'
import Detail from '../screens/Home/Home Details/Detail'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Home',
          headerLeft: (
            <Icon
              style={{padding: 10}}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={25}
            />
          ),
        };
      },
    },
    Edit: {screen: Edit},
    Detail: {screen: Detail},
  },
  {
    initialRouteKey: 'Home',
  },
);

const FeedStack = createStackNavigator (
  {
    Feed: {
      screen: Feed,
    },
    updatedNews: {
      screen: News,
    },
    latestNews: {
      screen: latestNews
    }
  }
)

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



const DashboardTabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack, //Harus Screen
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon style={{padding: 10}} name="ios-home" size={25} />
        ),
      },
    },
    Feed: {
      screen: Feed, //Harus Screen
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon style={{padding: 10}} name="logo-rss" size={25} />
        ),
      },
    },
    Setting: {
      screen: Setting, //Harus Screen
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon style={{padding: 10}} name="ios-build" size={25} />
        ),
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
        gesturesEnabled: false,
      };
    },
  },
);

const DashboardStackNavigation = createStackNavigator({
  DashboardTabNavigation: DashboardTabNavigation
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: (
        <Icon 
          style= {{padding:10}}
          onPress= {()=> navigation.openDrawer()}
          name= "md-menu"
          size = {25} />
      )
    }
    
  },
  transitionConfig: NavigationConfig,
  headerLayoutPreset: 'center'
})

const AppDrawerNavigation = createDrawerNavigator({
  Dashboard: {screen: DashboardStackNavigation},
  Profile: {screen: ProfileNavigator}
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
