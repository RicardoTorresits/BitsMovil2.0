import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/authContext/AuthContext';
import { MoodProvider } from './src/context/myMoodContext/MoodContext';
import { NoticiasProvider } from './src/context/NoticiaContext/NoticiaContext';

const AppState = ({children}:any) =>{
  return(
    <AuthProvider>
      <NoticiasProvider>
        <MoodProvider>
          {children}
        </MoodProvider>
      </NoticiasProvider>
    </AuthProvider>
  )
}

const  App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator/>
      </AppState>
    </NavigationContainer>
  );
}

export default App