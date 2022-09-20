import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/HeaderCustomTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const HeaderCustom = () => {

    const {top} = useSafeAreaInsets();

  return (
        <View style={{
            ...styles.subContianer,
            height:90,
            marginVertical:0
  
        }}>
            <TouchableOpacity 
                style={{...styles.DraweButton}}
                //onPress={DrawerActions.toggleDrawer}
            >
                <Image
                    source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                    style={styles.Image}
                />
            </TouchableOpacity>

            <Text style={styles.Text}>
                Noticias
            </Text>

            <TouchableOpacity style={styles.IconContainer}>
                <Image
                    source={require('../assets/Notifications.png')}
                    style={styles.Icon}
                />

            </TouchableOpacity>

        </View>
  )
}
