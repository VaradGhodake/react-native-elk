import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import { 
  createMaterialBottomTabNavigator 
} from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';

let screen = Dimensions.get('window');

const TabNavigator = createMaterialBottomTabNavigator(
  {
    'ScreenOne': {
      screen: ScreenOne,
      navigationOptions: {
        tabBarLabel: 'First',
        tabBarIcon: ({ tintColor }) => <Icon name="textsms" type="material-icons" size={28} color={tintColor} />
      },
    },
    'ScreenTwo': {
      screen: ScreenTwo,
      navigationOptions: {
        tabBarLabel: 'Second',
        tabBarIcon: ({ tintColor }) => <Icon name="home" type="material-icons" size={28} color={tintColor} />
      },
    },
    'ScreenThree': {
      screen: ScreenThree,
      navigationOptions: {
        tabBarLabel: '<i>Third</i>',
        tabBarIcon: ({ tintColor }) => <Icon name="polymer" type="material-icons" size={25} color={tintColor} />
      },
    }
  },
  {
    initialRouteName: 'ScreenTwo',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#000000' },
  }
);

const TabContainer = createAppContainer(TabNavigator);
export default TabContainer;