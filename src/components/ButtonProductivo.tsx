import React from 'react'
import { Image, Text,View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonProductivo = () => {
  return (
    <View
      style={{...styles.Button, 
      height:'100%',
      borderColor:'#42DBBE',
      flexDirection:'row',
      marginTop:'15%',
      width:'100%',
      justifyContent:'center',
    }}
    >
            <Image
                source={require('../assets/sentiment_satisfied.png')}
                style={{...styles.imageButton,marginLeft:'-10%'}}
            />
            <Text style={styles.textButton}>
                Productivo
            </Text>
    </View>
  )
}
