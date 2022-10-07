import React, { useContext } from 'react';

import { createStackNavigator, Header } from '@react-navigation/stack';
import { LogginScreen } from '../screens/LogginScreen';
import { ShadowPropTypesIOS, View } from 'react-native';
import { DrawerNavigation } from './DraweNavigation';
import { AuthContext } from '../context/authContext/AuthContext';
import { HomeScreen } from '../screens/HomeScreen';
import { NotificaconScreen } from '../screens/NotificaconScreen';


export type RouteStackParams={
  MessageMoodScreen:{idMyMood: string}
}

const Stack = createStackNavigator();

export const StackNoticia = () => {
  
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown:false
        }
      }   
    >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NotificaconScreen" component={NotificaconScreen} />
    </Stack.Navigator>
  );
}