import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Feed from '../screens/Feed/Feed';

const FeedNavigator = createStackNavigator(
  {
    Feed: {screen: Feed},
  },
  {
    headerMode: "none",
    initialRouteKey: "Feed",
  },
);

export default FeedNavigator;
