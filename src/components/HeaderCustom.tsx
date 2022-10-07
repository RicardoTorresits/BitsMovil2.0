import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/HeaderCustomTheme';

interface Props extends StackScreenProps<any, any> {};

export const HeaderCustom = ({navigation,route}:Props) => {
    

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
                <Image
                    source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                    style={styles.Image}
                />
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
