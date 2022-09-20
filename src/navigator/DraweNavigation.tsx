import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { View, Text, Image, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { styles } from '../theme/DraweCustomTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

  

  const {top,bottom} = useSafeAreaInsets();


  return(
    <View style={{
      flex:1, 
      backgroundColor:'#093C5D',
      top:(Platform.OS==='ios')
        ?top
        :0
      }}>
      <View style={{...styles.avatarContainer}}>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                style={styles.Image}
              />
          </View>
          <Text style={styles.Text}>
            Nico
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
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttom}>

          <Image
            source={require('../assets/logout.png')}
            style={styles.icon}
          />

          <Text style={styles.textButtom}>
            Cerrar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}