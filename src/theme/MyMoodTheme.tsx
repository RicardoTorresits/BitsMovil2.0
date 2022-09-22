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
    },
    modalContainerMater:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    modalContainer:{
        backgroundColor:'#FFFFFF',
        width:326,
        height:206,
        borderRadius:29,
        alignItems:'center',
        justifyContent:'center',
        top:'45%',
        left:'8%',
    },
    modalText:{
        color:'#303030',
        fontSize:14,
        fontWeight:'400',
        lineHeight:16.41,
        textAlign:"center",
        marginVertical:10,
        marginHorizontal:4
    },
    modalButton:{
        width:105,
        height:41.14,
        borderRadius:20,
        backgroundColor:'#FEC104',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    modalButtonText:{
        width:48.13,
        height:19,
        fontSize:16,
        fontWeight:'700',
        lineHeight:18.75,
        textAlign:"center",
        color:'#FFFFFF'
    },
    lineaGris:{
        backgroundColor:'#C7CCDC',
        borderWidth:1,
        borderColor:'#C7CCDC',
        width:'100%',
        marginTop:29
    }
});