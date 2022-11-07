import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderCustom } from '../components/HeaderCustom';
import { styles } from '../theme/ReaccionesTheme';

interface Props extends StackScreenProps<any, any> {};

export const ReaccionesScreen = ({navigation,route}:Props) => {

  const {top} = useSafeAreaInsets()

  return (
    <View style={{top:top}}>
        <HeaderCustom navigation={navigation} route={route}/>
        <View style={styles.container}>
          <View style={styles.containerReacciones}>
            <Text>
              Reacciones
            </Text>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets')}/>
            </View>
            <View style={{flexDirection:'row'}}>

            </View>
            <View style={{flexDirection:'row'}}>

            </View>
          </View>
        </View>
    </View>
  )
}
