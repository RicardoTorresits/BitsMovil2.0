import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { HeaderCustom } from '../components/HeaderCustom'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Noticia } from '../components/Noticia';
import { styles } from '../theme/NoticiasTheme';
import { Image } from 'react-native-animatable';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {};


export const HomeScreen = ({navigation,route}:Props) => {

   const {top} = useSafeAreaInsets()

  return (
    <View style={{top:top}}>
        <HeaderCustom navigation={navigation} route={route}/>
        <ScrollView>
          <Noticia/>
          <Noticia/>
          <Noticia/>
          <View style={styles.loading}>
          </View>
        </ScrollView>
        <TouchableOpacity
            style={styles.buttonNoticia}
            onPress={() => navigation.navigate('CrearNoticiaScreen')}
          >
            <Image
              source={require('../assets/AgregarNoticia.png')}
            />
          </TouchableOpacity>
    </View>
  )
}
