import React, { useState } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-animatable'
import { styles } from '../theme/NotificacionesTheme'


export const Notificaciones = () => {

    const [modalVisible, setModalVisible] = useState(false)

  return (
    <View
        style={{
            alignItems:'center',
            alignContent:'center',
            paddingHorizontal:20
        }}
    >
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() =>{
              !modalVisible
            }}
        >
            <View style={styles.modalContainerMater}>
                <View style={styles.modalContainer}>
                    <View style={styles.containerFecha}>
                        <Text style={styles.fechaText}>
                            20 de octubre del 2022
                        </Text>
                    </View>
                    <View style={styles.containerTitulo}>
                        <Text style={styles.TextTitulo}>
                            Lorem ipsum dolor
                        </Text>
                    </View>
                    <View style={styles.ContainerText}>
                        <Text style={styles.modalText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem earum nulla nostrum sit magni explicabo porro reprehenderit, eligendi architecto in ex quasi libero ipsum nihil officiis minima debitis magnam.
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={()=>setModalVisible(!modalVisible)}
                    >
                        <Text
                            style={styles.modalButtonText}
                        >
                            Cerrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <TouchableOpacity
            onPress={() =>setModalVisible(!modalVisible)}
            style={styles.container}
        >
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginTop:'7%',
                    width:'100%'
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        width:'80%'
                    }}
                >
                    {
                        <View
                            style={{
                                backgroundColor:'#367EEA',
                                borderRadius:100,
                                width:8,
                                height:8,
                                marginTop:5,
                                marginRight:5
                            }}
                        />
                    }
                    <Text
                        style={{
                            fontSize:14,
                            fontWeight:'700',
                            color:'#303030',
                            lineHeight:16.41
                        }}
                    >
                        Lorem ipsum dolor
                    </Text>
                </View>
                    <Text 
                        style={{
                            color:'#367EEA'
                        }}
                    >
                        20 oct
                    </Text>
            </View>

            <Text
                style={styles.textNotificaciones}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam saepe qui in sapiente itaque accusantium est, corporis quas sunt? Fugit, nihil fugiat a reprehenderit hic delectus cum perferendis ea!
            </Text>

        </TouchableOpacity>
    </View>
  )
}
