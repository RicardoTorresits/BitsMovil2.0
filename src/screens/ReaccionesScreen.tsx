import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/ReaccionesTheme';
import { AuthContext } from '../context/authContext/AuthContext';
import { HeaderCustom4 } from '../components/HeaderCustom4';

interface Props extends StackScreenProps<any, any> {};

export const ReaccionesScreen = ({navigation,route}:Props) => {

  const {user} = useContext(AuthContext)

  const {top} = useSafeAreaInsets()

  return (
    <View style={{top:top,flex:1}}>
        <HeaderCustom4 navigation={navigation} route={route}/>
        <View style={styles.container}>
          <View style={styles.containerReacciones}>
            <TouchableOpacity>
              <Text style={styles.text}>
              8 Reacciones
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Image source={require('../assets/Heart.png')}/>
              <Text style={{...styles.text,marginHorizontal:10}}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Image source={require('../assets/Clap.png')}/>
              <Text style={{...styles.text,marginHorizontal:10}}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Image source={require('../assets/Happy.png')}/>
              <Text style={{...styles.text,marginHorizontal:10}}>
                4
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#C7CCDC',height:1, width:'100%'}}>
            {/*<View style={{backgroundColor:'#F7B801',height:2, width:'25%',left:'3%'}}/>*/}
            <View style={{backgroundColor:'#F7B801',height:2, width:'15%',left:'34%'}}/>
            {/*<View style={{backgroundColor:'#F7B801',height:2, width:'15%',left:'57%'}}/>*/}
            {/*<View style={{backgroundColor:'#F7B801',height:2, width:'15%',left:'81%'}}/>*/}
          </View>
          <View style={styles.containerReaccionesTotales}>
            <View style={{...styles.ContainerDatos}}>
              <View style={styles.sombraimg}>
                <Image source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')} style={{...styles.img,}}/>
              </View>
              <View style={styles.textContainer}>
                <Text style={{color:'#303030', fontWeight:'500', fontSize:19,lineHeight:18.75}}>
                  {user.nombreRespuesta}
                </Text>
                <Text style={{color:'#303030', fontWeight:'300', fontSize:15, lineHeight:14.06, marginTop:5}}>
                  Hace 28 dias
                </Text>
              </View>
              <Image source={require('../assets/Heart.png')} style={styles.imgReacion}/>
            </View>
          </View>
        </View>
    </View>
  )
}
