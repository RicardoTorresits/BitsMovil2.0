import React, { createContext, useContext, useState } from 'react'
import bitsApi from '../../api/bitsApi';
import { AuthContext } from '../authContext/AuthContext';



type NoticiasProps={
    dataNoticia:any;
    sendNoticias: (idUser:string,Archivo:string,Descripcion:string) => Promise<void>;
    getNoticias:() => Promise<void>;
}

export const NoticiasContext = createContext({} as NoticiasProps)

export const NoticiasProvider = ({children}:any) => {

    const {user} = useContext(AuthContext)

    const [dataNoticia, setDataNoticia] = useState()


    const sendNoticias = async(idUser:string,Archivo:string,Descripcion:string) => {
        const resp = await bitsApi.post('/publicaciones',{
            idUser:user.idUsuarioRespuesta,
            Archivo,
            Descripcion
        });
        console.log(resp.data.result)
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
