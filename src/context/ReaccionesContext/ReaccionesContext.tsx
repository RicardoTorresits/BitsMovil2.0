import React, { createContext, useState } from 'react'

type ReeaccionesProps={
    dataReaccion:any
    sendReaccion: () => Promise<void>;
    getReaccion : () => Promise<void>; 
}


const Arr = [
    
]

export const ReaccionesContext = createContext({} as ReeaccionesProps)

export const ReaccionesProvider = ({children}:any) => {

    const [dataReaccion, setDataReaccion] = useState()

    const sendReaccion = async() => {
      try {
        
      } catch (error) {
        console.log(error)
      }
    }

    const getReaccion = async() => {
      try {
        
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <ReaccionesContext.Provider value={{
        dataReaccion,
        sendReaccion,
        getReaccion
    }}>
        {children}
    </ReaccionesContext.Provider>
  )
}
