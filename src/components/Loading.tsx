import React from 'react'
import { View } from 'react-native'
import Lottie from 'lottie-react-native';

export const Loading = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Lottie source={require('../assets/animation/ezgif.com-gif-maker.mp4.lottie.json')} autoPlay loop/>
    </View>
  )
}
