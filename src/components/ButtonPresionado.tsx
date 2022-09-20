import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonPresionado = () => {
  return (
    <View
      style={{
        ...styles.Button,
        borderColor:'#FEC104',
        flexDirection:'row',
        marginTop:50
      }}
    >
            <Image
                source={require('../assets/Vector.png')}
                style={styles.imageButton}
            />
            <Text style={styles.textButton}>
                Presionado
            </Text>
    </View>
  )
}
