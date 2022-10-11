import React, { createContext, useContext, useState} from 'react'
import bitsApi from '../../api/bitsApi';
import { DataGrafic,Result,View } from '../../interface/MymoodInterface';
import { AuthContext } from '../authContext/AuthContext';


type MoodProps ={
    dataMood:DataGrafic;
    Perision:any;
    sendMood: (idUser:number,idMyMood:string,Comentario:string) => Promise<void>;
    getData: () => Promise<void>;
    ViewGrafic: () => Promise<void>;
}

export const MoodContext = createContext({} as MoodProps);


export const MoodProvider = ({children}:any) => {

    const {user} = useContext(AuthContext)

    const [dataMood, setDataMood] = useState<DataGrafic>()
    const [Perision, setPerision] = useState()
    
  
    const sendMood = async(idUsuario:number,idMyMood:string,Comentario:string) =>{

        const resp = await bitsApi.post('/myMood',{
            idUsuario,
            idMyMood,
            Comentario
        });
        console.log(resp.data.result)

    }

    const getData = async() => {
        const resp =  await bitsApi.get<DataGrafic>('/myMood');
        setDataMood(resp.data)
    }

    const ViewGrafic = async() => {
        const resp =  await bitsApi.get(`/myMood/estadisticas/?idUsuario=${user.idUsuarioRespuesta}`);
        setPerision(resp.data.result[0].Enviadas)
        console.log(Perision)
    }

    return(
        <MoodContext.Provider value={{
            dataMood,
            Perision,
            sendMood,
            getData,
            ViewGrafic
        }}>
            {children}
        </MoodContext.Provider>
    )

}
