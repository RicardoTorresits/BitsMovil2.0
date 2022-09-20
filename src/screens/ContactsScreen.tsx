import React,{useContext, useEffect, useState} from 'react'
import { ScrollView,Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import bitsApi from '../api/bitsApi';
import { Contact } from '../components/Contact';
import { HeaderCustom2 } from '../components/HeaderCustom2';
import { AuthContext } from '../context/authContext/AuthContext';
import { Contacs, Datum } from '../interface/ContactInterface';
import { styles } from '../theme/ContactTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const ContactsScreen = () => {

  const {top} = useSafeAreaInsets()

  const {user} = useContext(AuthContext)

  const [Contacts, setContacts] = useState<Datum[]>([])
  const [initialData, setInitialData] = useState <Datum[]>([])


  const [button, setButton] = useState('Todos')

  const load = async () => {
    let respuesta = await bitsApi.get(`/contacts/?id=${user.idUsuarioRespuesta}`)
    setInitialData(respuesta.data.data)
  }

  useEffect(() => {
    if(initialData){
      Filter(0,'Todos')
    }
  }, [initialData])

  useEffect(() => {
    load()
  }, [])
  



const addFavorite = async (idUser:string, idFavorite:number ) => {
    const resp = await bitsApi.post ('/contacts',{
        idUser,
        idFavorite
    }); 
    console.log(resp.data)
    load()
}

const deleteavorite = async (idUser:string, idFavorite:number ) => {
    console.log(idFavorite,idUser)
    const resp = await bitsApi.post ('/contacts/delete',{
        idUser,
        idFavorite
    }); 
    console.log(resp.data)
    load()
}

 const Filter = async(Filtro:number, Desde:string) => {
  
    if (Filtro === 1){
      const favorite = initialData.filter((item) =>  item.Favorito===1)
      setContacts(favorite)
      setButton('Favoritos')
    }
    if(Filtro === 0){
      const favorite = initialData.filter((item) =>  item.idUsuario>0)
      setContacts(favorite)
      setButton('Todos')
    }
    if(Filtro === 3){
      if(Desde === 'Favoritos'){
        const favorite = initialData.filter((item) =>  item.Favorito===1)
        setContacts(favorite)
        setButton('Favoritos')
      }else{
        const favorite = initialData.filter((item) =>  item.idUsuario>0)
        setContacts(favorite)
        setButton('Todos')
      }
    }
  }

  return (
    <View style={{top:top}}>
      <HeaderCustom2 setContacts={setContacts} Contacts={Contacts} Filter={Filter} button={button}/>
      <View
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          style={[
            (button==='Todos')
              ?styles.buttonActive
              :styles.buttonInActive
          ]
          }
          onPress={() =>Filter(0,'Todos') }
        >
          <Text style={styles.text}>
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            (button==='Favoritos')
              ?styles.buttonActive
              :styles.buttonInActive
          ]
          }
          onPress={() => Filter(1,'Favoritos')}
        >
          <Text style={styles.text}>
            Favoritos
          </Text>
        </TouchableOpacity>
      </View>

        <View style={{justifyContent:'center', alignItems:'center',marginBottom:530}}>
          <Contact 
            Contacts={Contacts} 
            addFavorite={addFavorite} 
            deleteavorite={deleteavorite} 
            button={button}
          />
        </View>

    </View>
  )
}
