import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { HeaderCustom2Calendar } from '../components/HeaderCustom2Calendar';

interface Props extends StackScreenProps<any, any> {};

export const CalendarScreen = ({navigation,route}:Props) => {
  return (
    <View>
        <HeaderCustom2Calendar navigation={navigation} route={route}/>
    </View>
  )
}
