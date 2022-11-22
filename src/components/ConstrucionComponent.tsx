import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/ConstruccionThemme';


export const ConstrucionComponent = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.title}>
            En Construcción
        </Text>
        <Image source={require('../assets/Construcion.png')}/>
        <Text style={styles.text}>
            Disponible Proximamente
        </Text>
    </View>
  )
}
