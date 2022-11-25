import React from 'react'
import { View } from 'react-native'
import Lottie from 'lottie-react-native';

export const Loading = () => {
  return (
        <Lottie source={require('../assets/animation/ezgif.com-gif-maker.mp4.lottie.json')} autoPlay loop  resizeMode='cover'/>
  )
}
