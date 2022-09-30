import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonPresionado = () => {
  return (
    <View
      style={{
        ...styles.Button,
        height:'100%',
        borderColor:'#FEC104',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:'15%',
      }}
    >
            <Image
                source={require('../assets/Vector.png')}
                style={{...styles.imageButton,marginLeft:'-10%'}}
            />
            <Text style={{...styles.textButton}}>
                Presionado
            </Text>
    </View>
  )
}
