import { ImageBackground, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    FormContainer:{
        position:'absolute',
        backgroundColor:'rgba(245, 246, 246, 1)',
        width:'100%',
        height:486,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignContent:'center',
        alignItems:'center',
        top:439
    },
    button:{
        flexDirection:'row',
        borderRadius:50,
        marginTop:15,
        width:320,
        height:55,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:2.62,
        elevation:4,
        backgroundColor:'#FFFFFF'
    },
    icono:{
        marginRight:10,
        width:30,
        height:30
    },
    CircleButton:{
        borderColor:'#C7CCDC',
        backgroundColor:'#F5F6F6',
        borderRadius:100,
        height:16,
        width:16,
        borderWidth:1,
        marginRight:10,
        justifyContent:'center',
        
    },
    CircleButton2:{
        borderColor:'#FABB00',
        backgroundColor:'#FABB00',
        borderRadius:100,
        height:10,
        width:10,
        borderWidth:1,
        marginRight:10,
        left:2
    },
    text:{
        marginLeft:5,
        fontWeight:'400',
        color:'#303030'
        //fontFamily:"Roboto"
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
        alignContent:'center',
        textAlign:'center',
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