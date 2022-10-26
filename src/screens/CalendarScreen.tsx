import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { HeaderCustom2Calendar } from '../components/HeaderCustom2Calendar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/CalendarTheme';


interface Props extends StackScreenProps<any, any> {};

export const CalendarScreen = ({navigation,route}:Props) => {
 const {top} = useSafeAreaInsets()
  return (
    <View style={{flex:1,top:top}}>
        <HeaderCustom2Calendar navigation={navigation} route={route}/>

        <View style={{...styles.containerButton}}>
          <TouchableOpacity style={{...styles.button}}>
            <Text style={{...styles.text}}>
              Hoy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.button}}>
            <Text style={{...styles.text}}>
              Martes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.button}}>
            <Text style={{...styles.text}}>
              Miercoles
            </Text>
          </TouchableOpacity>
        </View>

          

        <View style={{...styles.containerMasterEventos}}>
          <Text style={styles.textDate}>
            26 de Octubre de 2022
          </Text>
          <View style={styles.ContainerDate}>
          </View>
        </View>

    </View>
  )
}
