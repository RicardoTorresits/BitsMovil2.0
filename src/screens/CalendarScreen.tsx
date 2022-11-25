import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { HeaderCustom2Calendar } from '../components/HeaderCustom2Calendar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/CalendarTheme';
import { CalendarioVacio } from '../components/CalendarioVacio';
import { ConstrucionComponent } from '../components/ConstrucionComponent';
import { Loading } from '../components/Loading';



interface Props extends StackScreenProps<any, any> {};

export const CalendarScreen = ({navigation,route}:Props) => {
 const {top} = useSafeAreaInsets()
  const [Evento, setEvento] = useState('cumpleaños')
  return (
    <View style={{flex:1,top:top,}}>
        <HeaderCustom2Calendar navigation={navigation} route={route}/>

        {/* <View style={{...styles.containerButton}}>
          <TouchableOpacity style={{...styles.button,backgroundColor:'#F7B801'}}>
            <Text style={{...styles.text}}>
              Hoy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.button}}>
            <Text style={{...styles.text}}>
              Martes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.button}}>
            <Text style={{...styles.text}}>
              Miercoles
            </Text>
          </TouchableOpacity>
        </View>

          

        <View style={{...styles.containerMasterEventos}}>
          <Text style={styles.textDate}>
            26 de Octubre de 2022
          </Text>
          <View style={{...styles.ContainerEvento,alignContent:'center', alignItems:'center'}}>
            {/*<View style={{flexDirection:'row', width:'100%',marginTop:10,paddingHorizontal:30}}>
              <View style={{...styles.containerImagen}}>
                {
                  (Evento==='aniversario')
                  &&<Image source={require('../assets/celebration.png')}/>
                }
                {
                  (Evento==='cumpleaños')
                  && <Image source={require('../assets/cake.png')} />
                }
              </View>
              <View style={{marginHorizontal:20,width:'80%',flex:1}}>
                <Text style={styles.textEvento}>
                  Cumpleaños
                </Text>
                <Text style={styles.textUserEvento}>
                  Nicolas claudio
                </Text>
            </View>
            
              </View>
            <View style={{width:'100%',height:'100%', justifyContent:'center'}}>
              <CalendarioVacio/>
            </View>
          </View>
        </View> */}

        {/* <ConstrucionComponent/> */}
        <Loading/>

    </View>
  )
}
