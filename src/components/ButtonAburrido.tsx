import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonAburrido = () => {
  return (
    <View
      style={{
        ...styles.Button,
        height:'100%',
        borderColor:'#9D57E5',
        flexDirection:'row',
        marginTop:'15%',
        width:'100%',
        justifyContent:'center',
      }}
    >
            <Image
                source={require('../assets/sentiment_neutral.png')}
                style={{...styles.imageButton,marginLeft:'-10%'}}
            />
            <Text style={styles.textButton}>
                Aburrido
            </Text>
    </View>
  )
}
