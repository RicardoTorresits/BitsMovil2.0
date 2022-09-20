import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/MyMoodTheme'

export const ButtonEnojada = () => {
  return (
    <View
      style={{
        ...styles.Button,
        borderColor:'#FB337B',
        flexDirection:'row',
        marginTop:50
      }}
    >
            <Image
                source={require('../assets/Mad.png')}
                style={styles.imageButton}
            />
            <Text style={styles.textButton}>
                Enfadado
            </Text>
    </View>
  )
}
