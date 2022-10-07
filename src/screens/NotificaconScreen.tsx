import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { HeaderCustom3 } from '../components/HeaderCustom3'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Notificaciones } from '../components/Notificaciones';

interface Props extends StackScreenProps<any, any> {};

export const NotificaconScreen = ({navigation,route}:Props) => {

  const {top} = useSafeAreaInsets()

  return (
    <View
      style={{top:top,alignContent:'center'}}
    >
        <HeaderCustom3 navigation={navigation} route={route}/>
        <Notificaciones/>
    </View>
  )
}
