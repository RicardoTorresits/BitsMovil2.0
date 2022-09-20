import React from 'react'
import { Image, Platform } from 'react-native';

export const MonoComponent = () => {
  return (
    <Image
            source={require('../assets/Logo_Personas.png')}
            style={{ 
              position:'absolute',
              width:216.67, 
              height:183.72, 
              transform:
              [
                {rotate:'-21.89deg'}
              ],
              //top:710,
              //left:217,
              left:'50%',
              top:'84%',
              }}
          />
  )
}
