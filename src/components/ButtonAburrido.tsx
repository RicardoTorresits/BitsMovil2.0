import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonAburrido = () => {
  return (
    <View
      style={{
        ...styles.Button,
        borderColor:'#9D57E5',
        marginTop:50,
        flexDirection:'row'
      }}
    >
            <Image
                source={require('../assets/sentiment_neutral.png')}
                style={styles.imageButton}
            />
            <Text style={styles.textButton}>
                Aburrido
            </Text>
    </View>
  )
}
