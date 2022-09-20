import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({

    FormContainer:{
        position:'absolute',
        backgroundColor:'rgba(245, 246, 246, 1)',
        width:'100%',
        height:485,
        //top:429,
        top:'51%',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        marginLeft:30
    },
    form:{
        marginLeft:20,
        backgroundColor:'#FFFFFF',
        width:320,
        height:40,
        borderRadius:100,
        borderColor:'#C7CCDC',
        borderWidth:.8
    },
    inputFieldIos:{
        borderBottomColor:"white",
        borderBottomWidth:2,
        paddingBottom:4
    }
    
});