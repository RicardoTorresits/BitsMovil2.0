import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteStackParams } from '../navigator/StackMymood';
import { styles } from '../theme/NoticiasTheme';
import { HeaderCustom5 } from '../components/HeaderCustom5';

const ArrReaccion=[
  {Icon:require('../assets/Group.png'), idReaccion:'1'},
  {Icon:require('../assets/reaccion.png'),idReaccion:'2'},
  {Icon:require('../assets/favorite_border.png'),idReaccion:'3'}
]

interface Props extends StackScreenProps<RouteStackParams, 'MessageMoodScreen'> {};


export const NoticiaScreen = ({navigation,route}:Props) => {
  const {top} = useSafeAreaInsets()
  return (
    <View style={{flex:1,top:top}}>
      <HeaderCustom5 navigation={navigation} route={route}/>
      <ScrollView>
        <View
          style={{...styles.container,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
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
                    nico
                  </Text>
                  <Text style={styles.text}>
                      09/11/2022
                  </Text>
              </View>
          </View>
          <View
              style={styles.containePublicacion}
          >
              <Text style={styles.textNoticia}>
                  
              </Text>
                  
              <Image
                  style={{...styles.imageNoticias,borderRadius:15}}
                  source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                  resizeMode='cover'
              />
                  
                            
          </View>
          <TouchableOpacity
              style={styles.CotainerButtons}
          >
            <TouchableOpacity 
              style={styles.icon}
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

          <View style={styles.ContainerComment}>
            <View style={{backgroundColor:'#C7CCDC',height:1, width:500}}/>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.NumberComments}>
                17
              </Text>
              <Text style={styles.Comments}>
                Comentarios
              </Text>
            </View>
            <View style={{backgroundColor:'#C7CCDC',height:1, width:500}}/>
          </View>
          
        </View>
      </ScrollView>
      
      <TouchableOpacity
        style={styles.buttonNoticia}
      >
        <Image
          source={require('../assets/Comment.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
