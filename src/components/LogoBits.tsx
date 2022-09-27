import React from 'react'
import { Image, View } from 'react-native'
import { BackGround } from './BackGround';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const LogoBits = () => {
  const{top}=useSafeAreaInsets()
  return (
    <View style={{alignItems:'center',}}>
        <Image
          source={require('../assets/Logo_Bits_Bco01.png')}
          style={{
                marginTop:top+10,
                width:'80%',
                //height:'60%'
                height:150,
                
            }}
        />
    </View>
  )
}
