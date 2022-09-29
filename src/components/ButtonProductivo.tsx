import React from 'react'
import { Image, Text,View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonProductivo = () => {
  return (
    <View
      style={{...styles.Button,borderColor:'#42DBBE'}}
    >
            <Image
                source={require('../assets/sentiment_satisfied.png')}
                style={styles.imageButton}
            />
            <Text style={styles.textButton}>
                Productivo
            </Text>
    </View>
  )
}
