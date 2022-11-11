import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/HeaderCustomTheme';
import UserAvatar from 'react-native-user-avatar';
import { AuthContext } from '../context/authContext/AuthContext';

interface Props extends StackScreenProps<any, any> {};

export const HeaderCustom3 = ({navigation,route}:Props) => {

    const {user} = useContext(AuthContext)
    

  return (
        <View style={{
            ...styles.subContianer,
            height:90,
            marginTop:0,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
        }}>
            <TouchableOpacity 
                style={{...styles.DraweButton}}
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
            <View
                style={{ flexDirection:'row'}}
            >
                <TouchableOpacity
                    style={{
                        height:10,
                        width:10,
                        marginRight:25
                    }}
                    onPress={() =>{navigation.popToTop()}}
                >
                    <Image
                        source={require('../assets/Back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.Text}>
                    Notificaciones
                </Text>
            </View>

            <TouchableOpacity 
                style={{...styles.IconContainer}}
                onPress={()=> navigation.navigate('NotificaconScreen')}
            >
                <Image
                    source={require('../assets/Notifications.png')}
                    style={{...styles.Icon}}
                />

            </TouchableOpacity>

        </View>
  )
}
