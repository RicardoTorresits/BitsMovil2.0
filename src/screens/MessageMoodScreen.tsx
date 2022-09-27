import React, { useContext, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, KeyboardAvoidingViewBase, Platform, TextInput, TouchableOpacity, View } from 'react-native'
import { HeaderCustomMood } from '../components/HeaderCustomMood'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonMotivado } from '../components/ButtonMotivado';
import { Text } from 'react-native-animatable';
import { styles } from '../theme/MessageMoodTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import { RouteStackParams } from '../navigator/StackMymood';
import { ButtonProductivo } from '../components/ButtonProductivo';
import { ButtonAburrido } from '../components/ButtonAburrido';
import { ButtonPresionado } from '../components/ButtonPresionado';
import { ButtonEnojada } from '../components/ButtonEnojada';
import { MoodContext } from '../context/myMoodContext/MoodContext';
import { AuthContext } from '../context/authContext/AuthContext';

interface Props extends StackScreenProps<RouteStackParams, 'MessageMoodScreen'> {};



export const MessageMoodScreen = ({navigation,route}:Props,) => {
  const {top} = useSafeAreaInsets()

  const {sendMood} = useContext(MoodContext)
  const {user} = useContext(AuthContext)


  const {text,onChange} = useForm({
    text:''
  });

  const sendMessage = () => {
    sendMood(
     user.idUsuarioRespuesta,
      params.idMyMood,
      text
    )
    Keyboard.dismiss();
    navigation.navigate('StadicticsMoodScreen')

  }
  


  


  const params=route.params

  return (
    <View
      style={{top:top,justifyContent:'center',alignItems:'center'}}
    >
        <HeaderCustomMood/>
        <View
          style={{marginTop:-40}}
        >
          {
            (params.idMyMood==='1')
              && <ButtonMotivado/>
              
          }
          {
            (params.idMyMood==='2')
              && <ButtonProductivo/>
          }
          {
            (params.idMyMood==='3')
              && <ButtonAburrido/>
          }
          {
            (params.idMyMood==='4')
              && <ButtonPresionado/>
          }
          {
            (params.idMyMood==='5')
              && <ButtonEnojada/>
          }
        </View>

        <Text
          style={styles.Title}
        >
          Cuéntanos
        </Text>
        <Text
          style={styles.text}
        >
          ¿por qué te sientes así ?
        </Text>

        <KeyboardAvoidingView
          behavior={(Platform.OS==='ios')? 'padding': 'height'}
        >

        <View
          style={styles.messageContainer}
        >

            <TextInput
              placeholder='Tu comentario es opcional'
              placeholderTextColor="rgba(131,131,131,1)"
              style={styles.TextInput}
              multiline={true}
              maxLength={300}
              onChangeText={(value)=> onChange(value,'text')}
              value={text}
              onSubmitEditing={sendMessage}
            />

          <View
            style={styles.containerButton}
          >
            <TouchableOpacity
              style={{...styles.button,
                borderColor:'#C7CCDC',
                borderWidth:1,
              }}
              onPress={() => navigation.popToTop()}
            >
              <Text
                style={{
                  ...styles.textButton,
                  color:'#093C5D'
                }}
                
              >
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.button,
                backgroundColor:'#FEC104',
              }}
              onPress={sendMessage}
            >
              <Text
                style={{
                  ...styles.textButton,
                  color:'#FFFFFF'
                }}
              >
                Enviar
              </Text>
            </TouchableOpacity>

          </View>
        </View>
        </KeyboardAvoidingView>
        
        


        
    </View>
  )
}
