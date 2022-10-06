import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/CrearNoticiaTheme';

interface Props extends StackScreenProps<any, any> {};

export const CrearNoticiaScreen = ({navigation}:Props) => {
    const {top} = useSafeAreaInsets()

    const [tempUri, settempUri] = useState<string>()

    const {text,onChange,img} = useForm({
        text:''
      });


    const takePhoto = () => {
        launchCamera({
          mediaType:'photo',
          quality:0.5
        }, (resp:any) =>{
          if (resp.didCancel) return
          if(!resp.assets[0].uri) return
          settempUri(resp.assets[0].uri)
        });
      }

      const takePhotoFromGalery = () => {
        launchImageLibrary({
          mediaType:'photo',
          quality:0.5
        }, (resp:any) =>{
          if (resp.didCancel) return
          if(!resp.assets[0].uri) return
          settempUri(resp.assets[0].uri)
        });
      }

  return (
    <View style={[styles.containerMaster,top>0?{top:top+5}:{top:35}]}>
        <Text style={styles.textContainer}>
            Crear noticia
        </Text>
        <View
            style={styles.container}
        >
            <View style={styles.containerUser}>
                <Image
                    source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                    style={styles.UserImg}
                />
                <Text
                    style={styles.textUser}
                >
                    Nico
                </Text>
            </View>
            <View style={{width:'100%',marginTop:'4%',height:.5,backgroundColor:'#656565'}}/>
            <ScrollView style={styles.ContianerPublicaion}>
                <Text style={styles.title}>
                    Descripción
                </Text>
                <TextInput
                    placeholder='¿Qué quieres contar?'
                    placeholderTextColor="#838383"
                    style={styles.textInput}
                    multiline={true}
                    textAlign={'left'}
                    maxLength={10000}
                    onChangeText={(value)=> {onChange(value,'text')}}
                    value={text}
                    //onSubmitEditing={}
                />
                {
                    (img.length > 0 && !tempUri)&&(
                        <Image
                            source={{uri:img}}
                            style={{
                                width:'100%',
                                height:500,
                                alignItems:'center',
                                marginTop:10
                            }}
                        />
                    )
                }
            </ScrollView>
            <View style={{width:'100%',marginTop:'3%',height:.5,backgroundColor:'#656565'}}/>
            <View style={styles.containerMasterButton}>
                <View style={styles.ContainerButtonCamara}>
                    <TouchableOpacity style={styles.ButtonCamaraGaleria}
                        onPress={takePhoto}
                    >
                        <Image
                            source={require('../assets/Camara.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonCamaraGaleria}
                        onPress={takePhotoFromGalery}
                    >
                        <Image
                            source={require('../assets/Galeria.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerButon}>
                    
                    <TouchableOpacity style={{...styles.Button,
                            backgroundColor:'#FFFFFF',
                            borderColor:'#C7CCDC',
                            borderWidth:1
                        }}
                        onPress={navigation.popToTop} 
                    >
                        <Text style={{...styles.ButtonText,color:'#093C5D'}}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{...styles.Button,backgroundColor:'#FABB00'}}
                    >
                        <Text style={{...styles.ButtonText,color:'#FFFFFF'}}>
                            Publicar
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    </View>
  )
}
