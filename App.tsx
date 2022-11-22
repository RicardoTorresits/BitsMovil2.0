import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/authContext/AuthContext';
import { MoodProvider } from './src/context/myMoodContext/MoodContext';
import { NoticiasProvider } from './src/context/NoticiaContext/NoticiaContext';
import { ReaccionesProvider } from './src/context/ReaccionesContext/ReaccionesContext';

const AppState = ({children}:any) =>{
  return(
    <AuthProvider>
      <NoticiasProvider>
        <MoodProvider>
          <ReaccionesProvider>
            {children}
          </ReaccionesProvider>
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