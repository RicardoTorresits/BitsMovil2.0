import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from '../theme/NoticiasTheme'
import { NoticiasContext } from '../context/NoticiaContext/NoticiaContext';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { FlatList } from 'react-native-gesture-handler';


const ArrReaccion=[
    {Icon:require('../assets/Group.png'), idReaccion:'1'},
    {Icon:require('../assets/reaccion.png'),idReaccion:'2'},
    {Icon:require('../assets/favorite_border.png'),idReaccion:'3'}
]



export const Noticia = (props:any) => {
    const {getNoticias} = useContext(NoticiasContext)

    useEffect(() => {
     getNoticias()
    }, [])

  return (

        <FlatList
            data={props.dataNoticia}
            keyExtractor={(p)=> p.id }
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
                <View
                    style={{...styles.container}}
                >
                    <View
                        style={styles.containerUser}
                    >
                        <Image
                            source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                            style={styles.image}
                        />

                        <View style={styles.containerDatos}>
                            <Text style={styles.textTitle}>
                                {item.Nombre}
                            </Text>
                            <Text style={styles.text}>
                                {item.fecha}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.containePublicacion}
                    >
                        <Text style={styles.textNoticia}>
                            {item.Descripcion}
                        </Text>
                        {
                            (item.Archivo)
                            &&
                            (
                                <Image
                                    style={{...styles.imageNoticias,borderRadius:15}}
                                    source={{uri:item.Archivo}}
                                    resizeMode='cover'
                                />
                            )
                        }
                    </View>
                    <View
                        style={styles.CotainerButtons}
                    >
                        <TouchableOpacity style={styles.icon}>
                            <Image
                                source={require('../assets/textsms.png')}
                            />
                        </TouchableOpacity>
                        
                        {
                            ArrReaccion.map((item,index)=>{
                                return(
                                    <TouchableOpacity key={index} style={styles.icon} >
                                        <Image
                                            source={item.Icon}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            )}
        >
        </FlatList>
  )
}
