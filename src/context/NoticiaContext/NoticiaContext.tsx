import React, { createContext, useContext, useState } from 'react'
import bitsApi from '../../api/bitsApi';
import { AuthContext } from '../authContext/AuthContext';
import { Noticia } from '../../interface/Publicaciones';



type NoticiasProps={
    dataNoticia:any;
    sendNoticias: (idUsuario:string,Descripcion:string,Archivo:string) => Promise<void>;
    getNoticias:() => Promise<void>;
}

export const NoticiasContext = createContext({} as NoticiasProps)

export const NoticiasProvider = ({children}:any) => {

    const [dataNoticia, setDataNoticia] = useState<Noticia[]>([])


    const sendNoticias = async(idUsuario:string,Descripcion:string,Archivo:string) => {

        try {
            const resp = await bitsApi.post('/publicaciones',{
                idUsuario,
                Descripcion,
                Archivo
            });
            console.log(resp.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    const getNoticias = async() =>{
        let resp = await bitsApi.get('/publicaciones')
        setDataNoticia(resp.data.result)

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
