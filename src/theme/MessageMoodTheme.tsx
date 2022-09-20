import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

export const styles = StyleSheet.create({
    Title:{
        color:'#093C5D',
        fontWeight:'700',
        fontSize:21,
        marginTop:10,
        lineHeight:24.61
    },
    text:{
        color:'#093C5D',
        fontWeight:'400',
        fontSize:21,
        lineHeight:24.61
    },
    messageContainer:{
        width:346.63,
        height:410,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        marginTop:20,
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    TextInput:{
        width:248,
        height:320,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        //textAlign:'center',
        fontSize:21,
        fontWeight:'400',
        lineHeight:24.61
        //backgroundColor:'red'
    },
    containerButton:{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
    },
    button:{
        height:41.14,
        width:109,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginHorizontal:5
    },
    textButton:{
        fontSize:16,
        fontWeight:'700',
        lineHeight:18.75
    }
});