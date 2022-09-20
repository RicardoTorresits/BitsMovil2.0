import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title:{
        color:'#093C5D',
        textAlign:'center',
        justifyContent:'center',
        marginTop:10,
        fontWeight:'700',
        fontSize:21,
        lineHeight:24.61
    },
    text:{
        color:'#093C5D',
        textAlign:'center',
        justifyContent:'center',
        fontWeight:'400',
        fontSize:21,
        lineHeight:24.61
    },
    ContainerButton:{
        alignItems:'center',
        alignContent:'center',
        height:524.39,
        width:'100%',
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginTop:30,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    Button:{
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        borderWidth:3,
        flexDirection:'row',
        alignItems:'center',
        height:70,
        width:270,
        marginTop:10,
    },
    imageButton:{
        marginLeft:30
    },
    textButton:{
        fontSize:21,
        fontWeight:'400',
        lineHeight:25,
        marginLeft:30
    },
    buttonMesage:{
        backgroundColor:'#F7B801',
        borderRadius:100,
        width:50,
        height:50,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        top:10,
        left:150
    },
    ImageMessage:{
        width:30,
        height:30
    }
});