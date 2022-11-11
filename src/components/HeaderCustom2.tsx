import React, { useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/HeaderCustomTheme';
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Value } from 'react-native-reanimated';
import { Contact } from './Contact';
import { AuthContext } from '../context/authContext/AuthContext';
import UserAvatar from 'react-native-user-avatar';

interface Props extends DrawerScreenProps <any, any>{};

export const HeaderCustom2 = ({navigation,props}:any,) => {
    const {top} = useSafeAreaInsets();

    const filtrado = (e:any) =>{
        console.log('Valor del input', e)
        if(e !== ''){
            let expresion = new RegExp(`${e}.*`, "i")
            const nuevoFiltrado = props.Contacts.filter((contacto:any)=> expresion.test(contacto.Nombre))
            props.setContacts(nuevoFiltrado)
        }else{
            props.Filter(3,props.button)
        }
    }

    const {user,Nombre} = useContext(AuthContext)

    return (
            <View 
                style={{
                    ...styles.container,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }}
            >
                <View style={{...styles.subContianer}}>
                    <TouchableOpacity 
                        style={styles.DraweButton}
                        //onPress={() => navigation.toggleDrawer()}
                    >
                        {
                            (user.imagenRespuesta!=='')
                            ?<UserAvatar size={45} name={user.nombreRespuesta}/>
                            :<Image
                            source={{uri:user.imagenRespuesta}}
                            style={styles.Image}
                        />
                        }
                        
                    </TouchableOpacity>

                    <Text style={styles.Text}>
                        Contactos
                    </Text>

                    <TouchableOpacity style={styles.IconContainer}
                        onPress={() => {navigation.navigate('NotificaconScreen')}}
                    >
                        <Image
                            source={require('../assets/Notifications.png')}
                            style={styles.Icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:5}}>
                    <TextInput
                        style={{
                            ...styles.textInput
                        }}
                        onChangeText={text => filtrado(text)}
                        
                    />
                    <TouchableOpacity
                        style={{
                            //backgroundColor:'red',
                            left:320,
                            top:-38,
                            width:25
                        }}
                        
                    >
                        <Image
                            source={require('../assets/Search.png')}
                            style={{
                                width:25,
                                height:25
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
  )
}
