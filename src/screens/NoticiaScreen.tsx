import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import { Image, Text, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Modal, TextInput, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteStackParams } from '../navigator/StackMymood';
import { styles } from '../theme/NoticiasTheme';
import { HeaderCustom5 } from '../components/HeaderCustom5';
import { useForm } from '../hooks/useForm';
import UserAvatar from 'react-native-user-avatar';
import { AuthContext } from '../context/authContext/AuthContext';

const ArrReaccion=[
  {Icon:require('../assets/Group.png'), idReaccion:'1'},
  {Icon:require('../assets/reaccion.png'),idReaccion:'2'},
  {Icon:require('../assets/favorite_border.png'),idReaccion:'3'}
]

interface Props extends StackScreenProps<RouteStackParams, 'MessageMoodScreen'> {};


export const NoticiaScreen = ({navigation,route}:Props) => {


  const [modalVisible, setModalVisible] = useState(false)

  const {user} = useContext(AuthContext)
  
  const {text,onChange} = useForm({
    text:'',
})

  const {top} = useSafeAreaInsets()
  return (
    <View style={{flex:1,top:top}}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          setModalVisible(!modalVisible)
        }}
      >
        <KeyboardAvoidingView 
          style={styles.modalContainerMater}
          behavior={(Platform.OS==="ios")?"padding":"height"}
        >
          <View style={styles.modalContainer}>
            <ScrollView>
              <TextInput
                placeholder='Escribe tu comentario'
                placeholderTextColor='#838383'
                style={styles.textInput}
                multiline={true}
                textAlign={'left'}
                onChangeText={(value)=> onChange(value,'text')}
                value={text}
              />
            </ScrollView>
            <View style={styles.CotainerButtons}>
              <TouchableOpacity style={{...styles.modalButton, borderColor:'#C7CCDC'}} onPress={()=> setModalVisible(false)}>
                <Text style={{...styles.buttonTextModal, color:'#093C5D'}}>
                  Cancelar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...styles.modalButton,backgroundColor:'#F7B801', borderColor:'#FFFFFF'}}>
                <Text style={{...styles.buttonTextModal, color:'#FFFFFF'}}>
                  Comentar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <HeaderCustom5 navigation={navigation} route={route}/>
      <ScrollView>
        <View
          style={{...styles.container,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
        >
          <View
              style={styles.containerUser}
          >
          {
            (user.imagenRespuesta!=='')
              ?<View style={styles.image}><UserAvatar size={50} name={user.nombreRespuesta}/></View>
              :<Image
                source={{uri:user.imagenRespuesta}}
                style={styles.image}
              />
          }

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

          <TouchableOpacity 
            style={styles.ContainerComment}
            onPress={() => {navigation.navigate('ReaccionesScreen')}}
          >
            <View style={{backgroundColor:'#C7CCDC',height:1, width:500}}/>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.NumberComments}>
                17
              </Text>
              <Text style={styles.Comments}>
                Reacciones
              </Text>
            </View>
            <View style={{backgroundColor:'#C7CCDC',height:1, width:500}}/>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
      
      <TouchableOpacity
        style={styles.buttonNoticia}
        onPress={()=>setModalVisible(true)}
      >
        <Image
          source={require('../assets/Comment.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
