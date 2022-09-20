import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import { Image,Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackGround } from '../components/BackGround';
import { LogIn } from '../components/LogIn';
import { LogoBits } from '../components/LogoBits';
import { RecuperarContraseña } from '../components/RecuperarContraseña';
import { styles } from '../theme/LogginTheme';
import { AuthContext } from '../context/authContext/AuthContext';
import { LogginEmail } from '../components/LogginEmail';
import { MonoComponent } from '../components/MonoComponent';



export const LogginScreen = () => {
  const {top} =useSafeAreaInsets();

  const {AuthLogin} = useContext(AuthContext)

    
  return (
    <View style={{flex:1, backgroundColor:'#093C5D'}}>
      <LogoBits/>
      <Text style={{fontSize:29.47,color:'#FFFFFF',textAlign:'center',fontWeight:'500',lineHeight:35}}>
        ¡Bienvenid@!
      </Text>
      {
        (AuthLogin ==='home')
          && <LogIn/>
      }
      {
        (AuthLogin==='Email')
          &&<LogginEmail/>
      }
      {
        (AuthLogin==='recovery')
          && <RecuperarContraseña/>
      }
      <MonoComponent/>
    </View>
  )
}


