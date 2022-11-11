import React,{useContext} from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { View, Text, Image, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { styles } from '../theme/DraweCustomTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/authContext/AuthContext';
import UserAvatar from 'react-native-user-avatar';
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {


  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown:false,
        drawerType:'front',
        drawerStyle:{
          width:232.72
        },
      }}
      drawerContent={(props) => <DrawerCustom{...props}/>}
    >
      <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
    </Drawer.Navigator>
  );
}

const DrawerCustom = ({navigation}:DrawerContentComponentProps) => {

  const {Nombre,user} = useContext(AuthContext)

  

  const {top,bottom} = useSafeAreaInsets();


  return(
    <View style={{
      ...styles.container,
      top:top
      }}>
      <View style={{...styles.avatarContainer}}>
          <View style={styles.imageContainer}>
          {
            (user.imagenRespuesta!=='')
              ?<UserAvatar size={55} name={user.nombreRespuesta}/>
              :<Image
                source={{uri:user.imagenRespuesta}}
                style={styles.Image}
              />
          }
          </View>
          <Text style={styles.Text}>
            {Nombre}
          </Text>
      </View>
      <View style={{
              ...styles.optionsActive,flexDirection:'row'
            }}
      >
        <Image
          source={require('../assets/home.png')}
        />
        <Text style={styles.activeText}>
          Noticias
        </Text>
      </View>

      <Text
        style={styles.avisoDePrivacidad}
      >
        Aviso de Privacidad
      </Text>
      

        <TouchableOpacity style={{...styles.buttom,bottom:0+top}}>
          <Image
            source={require('../assets/logout.png')}
            style={styles.icon}
          />
          <Text style={styles.textButtom}>
            Cerrar Sesión
          </Text>
        </TouchableOpacity>

    </View>
  )

}