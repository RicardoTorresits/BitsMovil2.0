import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/HeaderCustomTheme';
import UserAvatar from 'react-native-user-avatar';
import { AuthContext } from '../context/authContext/AuthContext';

interface Props extends StackScreenProps<any, any> {};

export const HeaderCustom2Calendar = ({navigation}:Props) => {
    const {top} = useSafeAreaInsets();
    const {user} = useContext(AuthContext)
    return (
        <>
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
                    <TouchableOpacity style={styles.DraweButton}>
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
                        Calendario
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
        </>
  )
}
