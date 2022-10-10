import React, { createContext, useState } from 'react'



type NoticiasProps={
    dataNoticia:any;
    sendNoticias: () => Promise<void>;
    getNoticias:() => Promise<void>;
}

export const NoticiasContext = createContext({} as NoticiasProps)

export const NoticiasProvider = ({children}:any) => {

    const [dataNoticia, setDataNoticia] = useState()


    const sendNoticias = async() => {

    }

    const getNoticias = async() =>{

    }
  
    return(
        <NoticiasContext.Provider value={{
            dataNoticia,
            sendNoticias,   
            getNoticias
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}
