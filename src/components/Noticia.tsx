import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from '../theme/NoticiasTheme'


const ArrReaccion=[
    {Icon:require('../assets/Group.png'), idReaccion:'1'},
    {Icon:require('../assets/reaccion.png'),idReaccion:'1'},
    {Icon:require('../assets/favorite_border.png'),idReaccion:'1'}
]

export const Noticia = () => {
  return (

    <ScrollView
    >
        <View
            style={styles.container}
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
                        Nicolas
                    </Text>
                    <Text style={styles.text}>
                        hace 2 dias
                    </Text>
                </View>
            </View>
            <View
                style={styles.containePublicacion}
            >
                <Text style={styles.textNoticia}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores cum quas aperiam praesentium repudiandae numquam nostrum nihil fuga consectetur repellendus sed officiis porro accusamus, animi ad odio ab ex.
                </Text>
                <Image
                    style={{...styles.imageNoticias,borderRadius:15}}
                    source={require('../assets/635907.jpg')}
                    resizeMode='cover'
                />
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
    </ScrollView>

  )
}
