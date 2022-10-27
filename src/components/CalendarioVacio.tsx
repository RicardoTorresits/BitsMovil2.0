import React from 'react'
import { Text } from 'react-native'
import { Image, View } from 'react-native-animatable'
import { styles } from '../theme/CalendarTheme';

export const CalendarioVacio = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
        <Image source={require('../assets/calendarVacio.png')}/>
        <Text style={styles.TextVacio}>
            No hay ningún evento
        </Text>
        <Text style={{...styles.TextVacio,marginTop:0}}>
            el día de hoy
        </Text>
    </View>
  )
}
