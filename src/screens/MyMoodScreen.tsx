import React, { useContext, useEffect } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

import { HeaderCustomMood } from '../components/HeaderCustomMood';

import { styles } from '../theme/MyMoodTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { MoodContext } from '../context/myMoodContext/MoodContext';

const ArrMood=[
 {Icon:require('../assets/sentiment_very_satisfied-.png'), idMyMood:'1',color:'#367EEA',Nombre:'Motivado'},
 {Icon:require('../assets/sentiment_satisfied.png'), idMyMood:'2',color:'#42DBBE',Nombre:'Productivo'},
 {Icon:require('../assets/sentiment_neutral.png'), idMyMood:'3',color:'#9D57E5',Nombre:'Aburrido'},
 {Icon:require('../assets/Vector.png'), idMyMood:'4',color:'#FEC104',Nombre:'Presionado'},
 {Icon:require('../assets/Mad.png'), idMyMood:'5',color:'#FB337B',Nombre:'Enojado'}
]


interface Props extends StackScreenProps<any, any> {};


export const MyMoodScreen = ({navigation}:Props) => {



  useEffect(() => {
    ViewGrafic()
  }, [])
  


  
  const {top}=useSafeAreaInsets()

  const {getData,ViewGrafic,Perision} = useContext(MoodContext)

  const Grafict = () => {
    getData()
    ViewGrafic()
    if(Perision>0){
      navigation.navigate('StadicticsMoodScreen')
    }else{
      Alert.alert('Debes elegir tu mood para poder ver las estadisticas')
    }
  }

  
  return (
    <View style={{justifyContent:'center',alignItems:'center',top:top}}>
        <HeaderCustomMood/>
        <Text style={styles.title}>
          ¡Hola !
        </Text>
        <Text style={styles.text}>
          ¿Cómo te sientes el día de hoy? 
        </Text>
        <View style={{...styles.ContainerButton}}>
          <View
            style={{marginBottom:20}}
          >

          </View>
          {ArrMood.map((item,index)=>{
            return(
              <TouchableOpacity
              key={index}
                onPress = { () => {navigation.navigate('MessageMoodScreen', {idMyMood:item.idMyMood})
                console.log(item.idMyMood)
              }}
                //onPress={() => console.log(item.idMyMood)}
              >
                <View 
                  style={{...styles.Button,flexDirection:'row',
                  borderColor:item.color,marginTop:15
                  }}
                >
                  <Image
                    source={item.Icon}
                    style={styles.imageButton}
                  />
                  <Text style={styles.textButton}>
                    {item.Nombre}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity style={styles.buttonMesage}
            onPress = { () =>  Grafict()}
          >
            <Image
              source={require('../assets/VectorGraficts.png')}
              style={styles.ImageMessage}
            />
          </TouchableOpacity>
        </View>
    </View>
    
  )
}
