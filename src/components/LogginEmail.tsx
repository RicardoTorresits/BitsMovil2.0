import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { styles } from '../theme/LogginEmailTheme';
import { AuthContext } from '../context/authContext/AuthContext';
import { MonoComponent } from './MonoComponent';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any>{}

export const LogginEmail = () => {

    const {recoveryAcount,goBackStart,logIn} = useContext(AuthContext)

    const {email,password, onChange}=useForm({
        email:'',
        password:''
    })

  return (
    <View style={{...styles.FormContainer}}>

            <View >
                <Text 
                    style={{
                        marginTop:30,
                        marginLeft:20,
                        fontSize:18, 
                        fontWeight:'400',
                        color:'#303030'
                    }}
                >
                    E-MAIL
                </Text>
                <TextInput
                    onChangeText={(value)=>onChange(value,'email')}
                    value={email}
                    style={{
                        fontSize:15,
                        backgroundColor:'#FFFFFF',
                        width:300,
                        height:40,
                        borderRadius:100,
                        marginTop:3,
                        borderColor:'#C7CCDC',
                        borderWidth:1,
                        paddingLeft:15
                    }}

                />
            </View>

            <View style={{marginTop:20}}>
                <Text
                    style={{
                    marginLeft:20,
                    fontSize:18, 
                    fontWeight:'400',
                    color:'#303030'
                    }}
                >
                    CONTRASEÑA
                </Text>
                <TextInput
                    onChangeText={(value)=>onChange(value,'password')}
                    value={password}
                    style={{
                        fontSize:15,
                        backgroundColor:'#FFFFFF',
                        width:300,
                        height:40,
                        borderRadius:100,
                        marginTop:3,
                        borderColor:'#C7CCDC',
                        borderWidth:1,
                        paddingLeft:15
                    }}
                />
            </View>
            <TouchableOpacity
                style={{
                    marginTop:40,                   
                }}
                onPress={recoveryAcount}
            >
                <Text
                    style={{
                        fontSize:16,
                        fontWeight:'400',
                        color:'#303030'
                    }}
                >
                    ¿Olvidaste tu Contraseña?
                </Text>
            </TouchableOpacity>


                

            <TouchableOpacity
                style={{
                    backgroundColor:'#F6B707',
                    width:145.5,
                    height:41.14,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:50,
                    marginTop:20
                }}
            >
                <Text 
                    style={{
                        color:'white',
                        fontWeight:'700',
                        fontSize:16
                    }}
                    onPress={logIn}
                >
                    Iniciar sesión
                </Text>
            </TouchableOpacity>

            <View 
                style={{
                    flexDirection:'column', 
                    position:'absolute',
                    top:'65%',
                    right:'83%'
                }}
            >
                <TouchableOpacity
                    onPress={goBackStart}
                >
                    <Image
                        source={require('../assets/arrow_back_ios_new.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
  )
}
