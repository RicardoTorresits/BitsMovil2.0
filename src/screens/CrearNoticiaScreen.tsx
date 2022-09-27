import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/CrearNoticiaTheme';

export const CrearNoticiaScreen = () => {
    const {top} = useSafeAreaInsets()
  return (
    <View style={{...styles.containerMaster,top:top}}>
        <Text style={styles.textContainer}>
            Crear noticia
        </Text>
        <View
            style={styles.container}
        >
            <Image
                source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                style={styles.UserImg}
            />
            <Text
                style={styles.textUser}
            >
                Nico
            </Text>
        </View>
    </View>
  )
}
