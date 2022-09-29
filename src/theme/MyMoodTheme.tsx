import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title:{
        color:'#093C5D',
        textAlign:'center',
        //justifyContent:'center',
        marginTop:'2%',
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
        lineHeight:24.61,
    },
    ContainerButton:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'80%',
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    Button:{
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        borderWidth:3,
        marginTop:'6%',
        bottom:'15%',
        width:'63%',
        height:'8.5%',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imageButton:{
        marginLeft:30, 
        width:30,
        height:30,
    },
    textButton:{
        fontSize:21,
        fontWeight:'400',
        lineHeight:25,
        color:'#303030',
        textAlign:"auto",
        marginLeft:30
    },
    buttonMesage:{
        position:'absolute',
        backgroundColor:'#F7B801',
        borderRadius:100,
        width:50,
        height:50,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        top:'75%',
        left:'80%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    ImageMessage:{
        width:30,
        height:30
    },
    modalContainerMater:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
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
        marginHorizontal:4,
        
    },
    modalButton:{
        width:105,
        height:41.14,
        borderRadius:20,
        backgroundColor:'#FEC104',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
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