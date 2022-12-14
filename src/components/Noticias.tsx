import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from '../theme/NoticiasTheme'
import { NoticiasContext } from '../context/NoticiaContext/NoticiaContext';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { FlatList } from 'react-native-gesture-handler';
import UserAvatar from 'react-native-user-avatar';


const ArrReaccion=[
    {Icon:require('../assets/Group.png'), idReaccion:'1'},
    {Icon:require('../assets/reaccion.png'),idReaccion:'2'},
    {Icon:require('../assets/favorite_border.png'),idReaccion:'3'}
]

const ArrReaccion1=[
    {Icon:require('../assets/Clap.png'), idReaccion:'1'},
    {Icon:require('../assets/reaccion.png'),idReaccion:'2'},
    {Icon:require('../assets/favorite_border.png'),idReaccion:'3'}
]

const ArrReaccion2=[
    {Icon:require('../assets/Group.png'), idReaccion:'1'},
    {Icon:require('../assets/Happy.png'),idReaccion:'2'},
    {Icon:require('../assets/favorite_border.png'),idReaccion:'3'}
]

const ArrReaccion3 =[
    {Icon:require('../assets/Group.png'), idReaccion:'1'},
    {Icon:require('../assets/Happy.png'),idReaccion:'2'},
    {Icon:require('../assets/Heart.png'),idReaccion:'3'}
]



export const Noticias = (props:any) => {
    const {getNoticias} = useContext(NoticiasContext)

    useEffect(() => {
     getNoticias()
    }, [])

  return (

        <FlatList
            data={props.dataNoticia}
            keyExtractor={(p)=> p.id }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{backgroundColor:'rgb(240,240,240)',height:100}}/>}
            renderItem={({item})=>(
                <View
                    style={{...styles.container,justifyContent:'center'}}
                >
                    <View
                        style={styles.containerUser}
                    >
                        {
                            (item.imagenUsuario ==='')
                                ?<View style={styles.image}><UserAvatar size={45} name={item.Nombre}/></View>
                                :<Image
                                style={styles.image}
                                source={{uri:item.imagenUsuario}}
                                />
                        }

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
                    <TouchableOpacity
                        style={styles.CotainerButtons}
                        onPress={() => {props.navigation.navigate('ReaccionesScreen')}}
                    >
                        <TouchableOpacity 
                            style={styles.icon}
                            onPress={()=>{props.navigation.navigate('NoticiaScreen')}}
                        >
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
                    </TouchableOpacity>
                </View>
            )}
        >
        </FlatList>
  )
}
