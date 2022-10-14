import React, { useContext, useEffect } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
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

  const {dataNoticia,getNoticias} = useContext(NoticiasContext)

  useEffect(() => {
    getNoticias()
  }, [!dataNoticia])
  
   

  return (
    <View style={{top:top,flex:1}}>
        <HeaderCustom navigation={navigation} route={route}/>
        <Noticia navigation={navigation} route={route} dataNoticia={dataNoticia} />
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
