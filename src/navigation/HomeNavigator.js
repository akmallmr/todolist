import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home/Home'
import Edit from '../screens/Home/Edit/Edit'
import Detail from '../screens/Home/Home Details/Detail'

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
