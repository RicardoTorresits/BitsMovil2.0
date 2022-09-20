import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/HeaderCustomTheme';

export const HeaderCustom2Calendar = () => {
    const {top} = useSafeAreaInsets();
    return (
        <>
            <View style={{...styles.container,top:top}}>
                <View style={{...styles.subContianer}}>
                    <TouchableOpacity style={styles.DraweButton}>
                        <Image
                            source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')}
                            style={styles.Image}
                        />
                    </TouchableOpacity>

                    <Text style={styles.Text}>
                        Calendar
                    </Text>

                    <TouchableOpacity style={styles.IconContainer}>
                        <Image
                            source={require('../assets/Notifications.png')}
                            style={styles.Icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:5}}>
                    <TextInput
                        style={{
                            ...styles.textInput
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            //backgroundColor:'red',
                            left:320,
                            top:-38,
                            width:25
                        }}
                    >
                        <Image
                            source={require('../assets/Search.png')}
                            style={{
                                width:25,
                                height:25
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </>
  )
}
