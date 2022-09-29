import { StyleSheet, Text } from 'react-native';

export const styles = StyleSheet.create({

    FormContainer:{
        backgroundColor:'rgba(245, 246, 246, 1)',
        flex:1,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        alignContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title:{
        marginTop:30,
        color:'#093C5D',
        fontSize:26,
        fontWeight:'500'
    },
    button:{
        marginTop:30,
        backgroundColor:'#F7B801',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        height:50,
        width:260
    },
    text:{
        fontSize:20,
        fontWeight:'700',
        color:'#FFFFFF'
    }
});