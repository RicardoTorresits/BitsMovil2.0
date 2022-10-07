import React, { useContext } from 'react';

import { createStackNavigator, Header } from '@react-navigation/stack';
import { LogginScreen } from '../screens/LogginScreen';
import { ShadowPropTypesIOS, View } from 'react-native';
import { DrawerNavigation } from './DraweNavigation';
import { AuthContext } from '../context/authContext/AuthContext';
import { CalendarScreen } from '../screens/CalendarScreen';
import { NotificaconScreen } from '../screens/NotificaconScreen';




const Stack = createStackNavigator();

export const StackCalendar = () => {
  
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown:false
        }
      }   
    >
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
          <Stack.Screen name="NotificaconScreen" component={NotificaconScreen} />
    </Stack.Navigator>
  );
}