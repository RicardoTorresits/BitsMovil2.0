import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { HeaderCustom } from '../components/HeaderCustom'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Noticia } from '../components/Noticia';
import { styles } from '../theme/NoticiasTheme';
import { Image } from 'react-native-animatable';


export const HomeScreen = () => {

   const {top} = useSafeAreaInsets()

  return (
    <View style={{top:top}}>
        <HeaderCustom/>
        <ScrollView>
          <Noticia/>
          <Noticia/>
          <Noticia/>
          <View style={styles.loading}>
          </View>
        </ScrollView>
        <TouchableOpacity
            style={styles.buttonNoticia}
          >
            <Image
              source={require('../assets/AgregarNoticia.png')}
            />
          </TouchableOpacity>
    </View>
  )
}
