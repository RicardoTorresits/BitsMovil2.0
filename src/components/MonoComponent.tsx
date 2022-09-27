import React from 'react'
import { Image, Platform } from 'react-native';

export const MonoComponent = () => {
  return (
    <Image
            source={require('../assets/Logo_Personas.png')}
            style={{ 
              position:'absolute',
              //backgroundColor:'red',
              width:'60%', 
              height:'40%', 
              transform:
              [
                {rotate:'-21.89deg'}
              ],
              top:'73%',
              left:170,
              //left:'50%',
              //top:'70%',
              }}
          />
  )
}
