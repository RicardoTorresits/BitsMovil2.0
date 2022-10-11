import React, { useContext, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { HeaderCustom } from '../components/HeaderCustom'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Noticia } from '../components/Noticia';
import { styles } from '../theme/NoticiasTheme';
import { Image } from 'react-native-animatable';
import { StackScreenProps } from '@react-navigation/stack';
import { NoticiasContext } from '../context/NoticiaContext/NoticiaContext';

interface Props extends StackScreenProps<any, any> {};


export const HomeScreen = ({navigation,route}:Props) => {

   const {top} = useSafeAreaInsets()

    const {dataNoticia} = useContext(NoticiasContext)
   

  return (
    <View style={{top:top}}>
        <HeaderCustom navigation={navigation} route={route}/>
        <ScrollView>
          <Noticia navigation={navigation} route={route}/>
          <View style={styles.loading}/>
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
