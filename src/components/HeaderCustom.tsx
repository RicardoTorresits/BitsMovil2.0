import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/authContext/AuthContext';
import { styles } from '../theme/HeaderCustomTheme';
import UserAvatar from 'react-native-user-avatar';

interface Props extends StackScreenProps<any, any> {};

export const HeaderCustom = ({navigation,route}:Props) => {

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

            <Text style={styles.Text}>
                Noticias
            </Text>

            <TouchableOpacity style={styles.IconContainer}
                onPress={()=> navigation.navigate('NotificaconScreen')}
            >
                <Image
                    source={require('../assets/Notifications.png')}
                    style={styles.Icon}
                />

            </TouchableOpacity>

        </View>
  )
}
