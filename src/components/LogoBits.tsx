import React from 'react'
import { Image, View } from 'react-native'
import { BackGround } from './BackGround';

export const LogoBits = () => {
  return (
    <View style={{alignItems:'center'}}>
        <Image
          source={require('../assets/Logo_Bits_Bco01.png')}
          style={{
                marginTop:75,
                width:268,
                height:163,
                
            }}
        />
    </View>
  )
}
