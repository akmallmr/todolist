import {React} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Transition } from 'react-native-reanimated';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'

import AuthNavigator from './AuthNavigator'
import HomeNavigator from './HomeNavigator'
import FeedNavigator from './FeedNavigator'
import ProfileNavigator from './ProfileNavigator'
import SettingNavigator from './SettingNavigator'

import Home from '../screens/Home/Home'
import Feed from '../screens/Feed/Feed'
import Setting from '../screens/Setting/Setting'


// const MySwitch = createAnimatedSwitch (
//     {
//         Homescreen:
//         { screen: Home },
//         Feedscreen:
//         { screen: Feed },
//         Profilescreen:
//         { screen: Profile },
//         Settingscreen:
//         { screen: Setting }
//     },
//     {
//         transition: (
//             <Transition.Together>
//                 <Transition.Out
//                 type="slide-bottom"
//                 durationMs={400}
//                 interpolation="easeIn"
//                 />
//                 <Transition.In 
//                 type="fade"
//                 durationMs={500}/>
//             </Transition.Together>
//         )
//     }
// )

const FadeTransition = (index, position) => {
    const sceneRange = [index - 1, index];
    const outputOpacity = [0, 1];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity,
    });

    return {
        opacity: transition
    }
}

const BottomTransition = (index, position) => {
    const sceneRange = [index - 1, index];
    const outputHeight = [height, 0];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputHeight,
    });

    return {
        transform: [{ translateY: transition}]
    }
}

const NavigationConfig = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const position = sceneProps.position;
            const scene = sceneProps.scene;
            const index = scene.index;
            // const height = sceneProps.layout.initHeight;

            return FadeTransition(index, position);
            // return BottomTransition(index, position, height);
        }
    }
}

const HomeTabNavigator = createBottomTabNavigator({
  Home,
  Feed,
  Setting
})

const MainNavigatorModal = createDrawerNavigator(
  {
    Home: {
      screen: HomeTabNavigator,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },
    // Feed: {
    //   screen: FeedNavigator,
    //   navigationOptions: () => ({
    //     title: 'Feed',
    //   }),
    // },
    Profile: {screen: ProfileNavigator},
    // Setting: {screen: SettingNavigator},
  },
  {
    initialRouteName: 'Home',
    transitionConfig: NavigationConfig,
    // headerMode:"none",
    headerLayoutPreset: 'center',
  },
);

const RootApp = createSwitchNavigator(
    {
        Auth: {screen: AuthNavigator},
        Main: {screen: MainNavigatorModal}
    },
    {
        initialRouteName: "Auth",
        headerMode: "none"
    }
)



export default createAppContainer(RootApp);