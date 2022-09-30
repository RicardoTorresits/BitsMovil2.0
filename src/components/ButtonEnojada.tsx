import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonEnojada = () => {
  return (
    <View
      style={{
        ...styles.Button,
        height:'100%',
        borderColor:'#FB337B',
        flexDirection:'row',
        marginTop:'15%',
        width:'100%',
        justifyContent:'center',
      }}
    >
            <Image
                source={require('../assets/Mad.png')}
                style={{...styles.imageButton,marginLeft:'-10%'}}
            />
            <Text style={styles.textButton}>
                Enfadado
            </Text>
    </View>
  )
}
