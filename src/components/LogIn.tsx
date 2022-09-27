import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Image, Modal, Platform, Text, TouchableOpacity, View } from 'react-native'

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { styles } from '../theme/LogginTheme'
import { ButtonIos } from './ButtonIos'
import { AuthContext } from '../context/authContext/AuthContext';

import { MonoComponent } from './MonoComponent'

interface Props extends StackScreenProps<any, any>{}

export const LogIn = () => {

  const {emailLogIn,logInGoogle,logIn,logInchange,Auth,modalVisible,ModalCloseOrOpen} = useContext(AuthContext)

  return (
    <View style={styles.FormContainer}>

    <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() =>{
            !modalVisible
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
                  style={{...styles.modalText}}
                >
                  Debes aceptar el 
                </Text>
                <Text
                  style={{...styles.modalText,color:'#093C5D',fontWeight:'500',marginTop:-100}}
                >
                  aviso de privacidad
                </Text>
                <Text
                  style={{...styles.modalText,marginLeft:40,marginTop:-30}}
                >
                  para 
                </Text>
                <Text style={{...styles.modalText,marginTop:-20}}>
                  poder continuar
                </Text>
              </View>
              <View
                style={styles.lineaGris}
              ></View>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() =>ModalCloseOrOpen()}
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


        <TouchableOpacity 
            style={{...styles.button,marginTop:'10%'}}
            onPress={emailLogIn}
        >
            <Image
                source={require('../assets/email.png')}
                style={{...styles.icono,marginHorizontal:-5}}
            />
            <Text style={{...styles.text,fontSize:14}}>
                INICIAR SESIÓN CON E-MAIL
            </Text>
        </TouchableOpacity>
          {
            Platform.OS ==='ios' &&
            <ButtonIos/>
          }
        <TouchableOpacity 
          style={styles.button}
          onPress={logInGoogle}
        >
            <Image
              source={require('../assets/google.png')}
              style={{...styles.icono,marginHorizontal:5}}
            />
            <Text style={{...styles.text,fontSize:14}}>
              INICIAR SESIÓN CON GOOGLE
            </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:20}}>
            <TouchableOpacity style={ styles.CircleButton} onPress={logIn} >
              {
                (Auth==='true')
                  &&<TouchableOpacity style={ styles.CircleButton2}
                    onPress ={logInchange}
                  >

                  </TouchableOpacity>
              }
            </TouchableOpacity>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={{color:'#303030',fontWeight:'400'}}>
                Acepto el
              </Text>
              <Text style={{color:'#093C5D', marginLeft:5, fontWeight:'500'}}>
                aviso de privacidad
              </Text>
            </View>
        </View>
    </View>   
  )
}
