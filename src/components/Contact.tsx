import React, { useContext} from 'react'
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../theme/ContactTheme';
import { AuthContext } from '../context/authContext/AuthContext';
import UserAvatar from 'react-native-user-avatar';




export const Contact = (props:any) => { 
    const {item,onPress,accessibilityState} = props
    const focused = accessibilityState

    const {user} = useContext(AuthContext)
    
      
      
    

  return (
    <View
        style={{alignItems:'center'}}
    >
        <FlatList
            data={props.Contacts}
            keyExtractor={(p) => p.idUsuario}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{backgroundColor:'rgb(240,240,240)',height:600,marginTop:10}}/>}
            renderItem={({item}) =>(
                <View  style={{paddingHorizontal:10}}>
                {
                    !focused
                        ?<TouchableOpacity
                            onPress={onPress}
                            //style={{marginBottom:'1%'}}
                        >
                        <View style={{...styles.cardContainer}}>
                            {
                                (item.Imagen==='')
                                    ?<View style={styles.Image}><UserAvatar size={85} name={item.Nombre}/></View>
                                    :<Image
                                    style={styles.Image}
                                    source={{uri:item.Imagen}}
                                    />
                            }
                            <View
                                style={styles.containerText}
                            >
                                <Text 
                                    style={styles.title}
                                >
                                    {item.Nombre}
                                </Text>
                                <Text>
                                    {item.Puesto}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.containerIcon}
                                onPress={()=>
                                    {
                                        (item.Favorito===0)
                                            ?props.addFavorite(user.idUsuarioRespuesta,item.idUsuario)
                                            :props.deleteavorite(user.idUsuarioRespuesta,item.idUsuario)
                                    }
                                    
                                }
                            >
                                {
                                    (item.Favorito===1)
                                    ?<Image
                                    source={require('../assets/star_rate.png')}
                                    style={styles.Icon}
                                />
                                    :<Image
                                    source={require('../assets/star_rate-1.png')}
                                    style={styles.Icon}
                                />
                                }
                                
                            </TouchableOpacity>
                        </View>
                        <View style={{...styles.containerText}}>
                            
                        </View>
                    </TouchableOpacity>
                    :<TouchableOpacity>
                    <View style={{...styles.cardContainer,height:102}}>
                        <Image
                            style={styles.Image}
                            source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                        />
                        <View
                            style={styles.containerText}
                        >
                            <Text 
                                style={styles.title}
                            >
                                {item.Nombre}
                            </Text>
                            <Text>
                                {item.Puesto}
                            </Text>
                            <Text>
                                {item.Telefono}
                            </Text>
                            <Text>
                                {item.Correo}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.containerIcon}
                        >
                            {
                                (item.Favorito===1)
                                    ?<Image
                                    source={require('../assets/star_rate.png')}
                                    style={styles.Icon}
                                />
                                    :<Image
                                    source={require('../assets/star_rate-1.png')}
                                    style={styles.Icon}
                                />
                            }
                            
                        </TouchableOpacity>
                    </View>
                    <View style={{...styles.containerText}}>
                        
                    </View>
                </TouchableOpacity>
                }
                <View style={{backgroundColor:'white',height:'-4%'}}/>
            </View> 
            )}
        >
            
        </FlatList>

    </View>

    
    
    
  )
}