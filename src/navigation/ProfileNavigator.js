import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from '../screens/Profile/Profile';

const ProfileNavigator = createStackNavigator(
  {
    Profile: {screen: Profile},
  },
  {
    headerMode: "none",
    initialRouteKey: "Profile",
  },
);

export default ProfileNavigator;
