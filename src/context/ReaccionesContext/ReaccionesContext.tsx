import React, { createContext, useState } from 'react'

type ReeaccionesProps={
    dataReaccion:any
}

export const ReaccionesContext = createContext({} as ReeaccionesProps)

export const ReaccionesProvider = ({children}:any) => {

    const [dataReaccion, setDataReaccion] = useState()


  return (
    <ReaccionesContext.Provider value={{
        dataReaccion
    }}>
        {children}
    </ReaccionesContext.Provider>
  )
}
