import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/RecuperarPasswordTheme';
import { AuthContext } from '../context/authContext/AuthContext';
import { MonoComponent } from './MonoComponent';

interface Props extends StackScreenProps<any, any>{}

export const RecuperarContraseña = () => {

  const {emailLogIn} = useContext(AuthContext)
  
  return (
    <View style={styles.FormContainer}>

        <Text style={styles.title}>
          Recupera tu cuenta
        </Text>

        <View>
          <Text 
            style={{
              marginTop:40,
              marginLeft:20,
              fontSize:22, 
              fontWeight:'400',
              color:'#303030'
            }}
          >
            E-MAIL
          </Text>
          <TextInput
            style={{
              fontSize:15,
              backgroundColor:'#FFFFFF',
              width:300,
              height:40,
              borderRadius:100,
              marginTop:3,
              borderColor:'#C7CCDC',
              borderWidth:1,
              paddingLeft:15,
            }}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Restablecer contraseña
          </Text>
        </TouchableOpacity>
        <View 
          style={{
            flexDirection:'row', 
            position:'absolute',
            top:'80%',
            right:'83%'
          }}
        >
          <TouchableOpacity
            onPress={emailLogIn}
          >
            <Image
              source={require('../assets/arrow_back_ios_new.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
  )
}
