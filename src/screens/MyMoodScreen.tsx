import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';

import { HeaderCustomMood } from '../components/HeaderCustomMood';

import { styles } from '../theme/MyMoodTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { MoodContext } from '../context/myMoodContext/MoodContext';
import { color } from 'react-native-reanimated';
import { AuthContext } from '../context/authContext/AuthContext';

const ArrMood=[
 {Icon:require('../assets/sentiment_very_satisfied-.png'), idMyMood:'1',color:'#367EEA',Nombre:'Motivado'},
 {Icon:require('../assets/sentiment_satisfied.png'), idMyMood:'2',color:'#42DBBE',Nombre:'Productivo'},
 {Icon:require('../assets/sentiment_neutral.png'), idMyMood:'3',color:'#9D57E5',Nombre:'Aburrido'},
 {Icon:require('../assets/Vector.png'), idMyMood:'4',color:'#FEC104',Nombre:'Presionado'},
 {Icon:require('../assets/Mad.png'), idMyMood:'5',color:'#FB337B',Nombre:'Enfadado'}
]


interface Props extends StackScreenProps<any, any> {};


export const MyMoodScreen = ({navigation,route}:Props) => {

  const [modalVisible, setModalVisible] = useState(false)
  const {Nombre} = useContext(AuthContext)

  useEffect(() => {
    ViewGrafic()
    console.log(Perision)
  }, [modalVisible])
  


  
  const {top}=useSafeAreaInsets()

  const {getData,ViewGrafic,Perision} = useContext(MoodContext)

  const Grafict = () => {
    getData()
    ViewGrafic()
    if(Perision>0){
      navigation.navigate('StadicticsMoodScreen')
    }else{
      setModalVisible(true)
    }
  }

  
  return (
    <View style={{top:top, flex:1,alignContent:'center'}}>
         <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() =>{
            setModalVisible(!modalVisible)
          }}
        >
          <View
            style={styles.modalContainerMater}
          >
            <View
              style={styles.modalContainer}
            >
              <Image
                source={require('../assets/ModalAlert.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width:'100%',
                  height:40,
                  //paddingHorizontal:'19%',
                  flexWrap:'wrap',
                  
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Text
                  style={styles.modalText}
                >
                  Debes elegir  
                </Text>
                <Text
                  style={{...styles.modalText,color:'#093C5D',fontWeight:'500'}}
                >
                  tu mood
                </Text>
                <Text
                  style={styles.modalText}
                >
                  para poder ver 
                </Text>
                <Text style={{...styles.modalText,marginTop:-20}}>
                  las estad??sticas
                </Text>
              </View>
              <View
                style={styles.lineaGris}
              ></View>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() =>setModalVisible(!modalVisible)}
              >
                <Text
                  style={styles.modalButtonText}
                >
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

          <HeaderCustomMood navigation={navigation} route={route}/>

          <Text style={styles.title}>
            ??Hola {Nombre}!
          </Text>
          <Text style={styles.text}>
            ??C??mo te sientes el d??a de hoy? 
          </Text>
        <View style={{...styles.ContainerButton}}>
          <View
            style={{marginBottom:'3%'}}
          >

          </View>
          
          {ArrMood.map((item,index)=>{
            return(
              <TouchableOpacity
                key={index}
                onPress = { () => {navigation.navigate('MessageMoodScreen', {idMyMood:item.idMyMood})
              }}
              style={{...styles.Button,
              borderColor:item.color,
              }}
              >
                  <Image
                    source={item.Icon}
                    style={styles.imageButton}
                  />
                  <Text style={styles.textButton}>
                    {item.Nombre}
                  </Text>
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
