import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/HeaderCustomTheme';
import UserAvatar from 'react-native-user-avatar';
import { AuthContext } from '../context/authContext/AuthContext';

interface Props extends StackScreenProps<any, any> {};

export const HeaderCustomMood = ({navigation,route}:Props) => {
    const {user} = useContext(AuthContext)
  return (
    <View style={{
        ...styles.subContianer,
        height:90,
        marginTop:0
    }}>
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
            My Mood
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
