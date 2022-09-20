import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/HeaderCustomTheme';
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Value } from 'react-native-reanimated';
import { Contact } from './Contact';

interface Props extends DrawerScreenProps <any, any>{};

export const HeaderCustom2 = (props:any) => {
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

    return (
            <View style={{...styles.container}}>
                <View style={{...styles.subContianer}}>
                    <TouchableOpacity 
                        style={styles.DraweButton}
                        //onPress={() => navigation.toggleDrawer()}
                    >
                        <Image
                            source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                            style={styles.Image}
                        />
                    </TouchableOpacity>

                    <Text style={styles.Text}>
                        Contacts
                    </Text>

                    <TouchableOpacity style={styles.IconContainer}>
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
