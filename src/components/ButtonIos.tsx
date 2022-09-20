import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/LogginTheme'
import { AuthContext } from '../context/authContext/AuthContext';

export const ButtonIos = () => {

  const {logIn} = useContext(AuthContext)

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={logIn}
    >
      <Image
        source={require('../assets/Apple_User_Groups1.png')}
        style={{...styles.icono,width:27,height:40, marginHorizontal:-15}}
      />
      <Text style={{...styles.text,fontSize:14, marginRight:-5}}>
        INICIAR SECCION CON APPLE
      </Text>
    </TouchableOpacity>
  )
}
