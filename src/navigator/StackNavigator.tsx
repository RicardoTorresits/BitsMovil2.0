import React, { useContext } from 'react';

import { createStackNavigator, Header } from '@react-navigation/stack';
import { LogginScreen } from '../screens/LogginScreen';
import { ShadowPropTypesIOS, View } from 'react-native';
import { DrawerNavigation } from './DraweNavigation';
import { AuthContext } from '../context/authContext/AuthContext';
import { CrearNoticiaScreen } from '../screens/CrearNoticiaScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  
  const {status} = useContext(AuthContext)

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown:false,

        }}
    >
    {
      (status !=='autheticated')
      ?(
          <Stack.Screen name="Home" component={LogginScreen} />
      )
      :(
          <>
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
            <Stack.Screen name="CrearNoticiaScreen" component={CrearNoticiaScreen}/>
          </>
      )

    }
    </Stack.Navigator>
  );
}