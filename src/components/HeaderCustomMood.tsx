import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/HeaderCustomTheme';

interface Props extends StackScreenProps<any, any> {};

export const HeaderCustomMood = ({navigation,route}:Props) => {
  return (
    <View style={{
        ...styles.subContianer,
        height:90,
        marginTop:0
    }}>
        <TouchableOpacity style={styles.DraweButton}>
            <Image
                source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                style={styles.Image}
            />
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
