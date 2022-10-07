import React, { useContext } from 'react';

import { createStackNavigator, Header } from '@react-navigation/stack';
import { LogginScreen } from '../screens/LogginScreen';
import { ShadowPropTypesIOS, View } from 'react-native';
import { DrawerNavigation } from './DraweNavigation';
import { AuthContext } from '../context/authContext/AuthContext';
import { ContactsScreen } from '../screens/ContactsScreen';
import { NotificaconScreen } from '../screens/NotificaconScreen';


export type RouteStackParams={
  MessageMoodScreen:{idMyMood: string}
}

const Stack = createStackNavigator();

export const StackContac = () => {
  
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown:false
        }
      }   
    >
          <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
          <Stack.Screen name="NotificaconScreen" component={NotificaconScreen} />
    </Stack.Navigator>
  );
}