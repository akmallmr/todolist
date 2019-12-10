import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Setting from '../screens/Setting/Setting';

const SettingNavigator = createStackNavigator(
  {
    Setting: {screen: Setting},
  },
  {
    headerMode: "none",
    initialRouteKey: "Setting",
  },
);

export default SettingNavigator;
