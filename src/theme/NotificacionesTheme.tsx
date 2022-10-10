import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:'5%',
        width:'100%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:19,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textNotificaciones:{
        marginVertical:'5%',
        marginBottom:'7%',
        width:'98%',
        textAlign:'justify',
        fontSize:14,
        fontWeight:'300',
        color:'#303030',
        lineHeight:16.41
    },
    modalContainerMater:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer:{
        backgroundColor:'#FFFFFF',
        width:326,
        borderRadius:29,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        top:'45%',
        left:'8%',
    },
    ContainerText:{
        justifyContent:'center'
    },
    modalText:{
        color:'#303030',
        fontSize:14,
        fontWeight:'400',
        lineHeight:16.41,
        textAlign:"justify",
        marginVertical:15,
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
        marginBottom:'10%'
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
    containerFecha:{
        alignItems:'flex-end',
        width:'100%',
        marginTop:'10%'
    },
    fechaText:{
        fontSize:11,
        fontWeight:'300',
        lineHeight:13,
        color:'#303030'
    },
    containerTitulo:{
        width:'100%',
        marginTop:'5%'
    },
    TextoContenido:{
        fontWeight:'300',
        fontSize:14,
        lineHeight:16.41,
        color:'#303030',
    },
    TextTitulo:{
        color:'#303030',
        fontSize:14,
        fontWeight:'bold',
        lineHeight:16.41,
        paddingLeft:3
    },
});