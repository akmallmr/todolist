import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../screens/Home/Home';

const HomeNavigator = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    headerMode: "none",
    initialRouteKey: "Home",
  },
);

export default HomeNavigator;
