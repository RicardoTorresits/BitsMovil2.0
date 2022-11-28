import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/ConstruccionThemme';



export const ConstrucionComponent2 = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.title}>
            EN CONSTRUCCIÓN
        </Text>
        <Image source={require('../assets/Construcion.png')}/>
        <Text style={styles.text}>
            Disponible próximamente
        </Text>
    </View>
  )
}
