import React from 'react'
import { Text, View } from 'react-native'
import { HeaderCustom } from '../components/HeaderCustom'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {

   const {top} = useSafeAreaInsets()

  return (
    <View style={{top:top}}>
        <HeaderCustom/>
    </View>
  )
}
