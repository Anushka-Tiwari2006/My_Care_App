import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/Homescreen';
import NotesScreen from './screens/NotesScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import DietScreen from './screens/DietScreen';
import LogoScreen from './screens/LogoScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigation/TabNavigator';
import DrawerNavigator from './Navigation/DrawerNavigator';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  LogoScreen:LogoScreen,
  TabNavigator: TabNavigator,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
