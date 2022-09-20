import React, { useContext } from 'react';

import { createStackNavigator, Header } from '@react-navigation/stack';
import { LogginScreen } from '../screens/LogginScreen';
import { ShadowPropTypesIOS, View } from 'react-native';
import { DrawerNavigation } from './DraweNavigation';
import { AuthContext } from '../context/authContext/AuthContext';
import { MyMoodScreen } from '../screens/MyMoodScreen';
import { MessageMoodScreen } from '../screens/MessageMoodScreen';
import { StadicticsMoodScreen } from '../screens/StadicticsMoodScreen';

export type RouteStackParams={
  MessageMoodScreen:{idMyMood: string}
}

const Stack = createStackNavigator();

export const StackMymood = () => {
  
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown:false
          
        }}   
    >
          <Stack.Screen name="MyMoodScreen" component={MyMoodScreen} />
          <Stack.Screen name="MessageMoodScreen" component={MessageMoodScreen} />
          <Stack.Screen name="StadicticsMoodScreen" component={StadicticsMoodScreen} />
    </Stack.Navigator>
  );
}