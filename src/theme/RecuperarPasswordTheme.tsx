import { StyleSheet, Text } from 'react-native';

export const styles = StyleSheet.create({

    FormContainer:{
        position:'absolute',
        backgroundColor:'rgba(245, 246, 246, 1)',
        width:'100%',
        height:425,
        top:429,
        borderRadius:50,
        alignContent:'center',
        alignItems:'center'
    },
    title:{
        marginTop:20,
        color:'#093C5D',
        fontSize:26,
        fontWeight:'500'
    },
    button:{
        marginTop:40,
        backgroundColor:'#F7B801',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        height:50,
        width:170
    },
    text:{
        fontSize:20,
        fontWeight:'700',
        color:'#FFFFFF'
    }
});