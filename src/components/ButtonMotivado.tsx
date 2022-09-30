import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/MyMoodTheme';
import { StackScreenProps } from '@react-navigation/stack';


export const ButtonMotivado = () => {

  return (
    <View 
      style={{...styles.Button,flexDirection:'row',
      height:'100%',
      borderColor:'#367EEA',
      marginTop:'15%',
      width:'100%',
      justifyContent:'center',
    }}
    >
            <Image
                source={require('../assets/sentiment_very_satisfied-.png')}
                style={{...styles.imageButton,marginLeft:'-10%'}}
            />
            <Text style={styles.textButton}>
                Motivado
            </Text>
    </View>
  )
}
