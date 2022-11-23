import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerButton:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:20,
        justifyContent:'space-evenly',
        marginTop:10
    },
    button:{
        backgroundColor:'#093C5D',
        width:100,
        height:41,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    text:{
        color:'#F5F6F6',
        fontSize:16,
        fontWeight:'500',
        lineHeight:18.75
    },
    containerMasterEventos:{
        backgroundColor:'#093C5D',
        flex:1,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        marginTop:10,
        justifyContent:'center',
    },
    textDate:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'500',
        lineHeight:21.09,
        textAlign:'center',
        marginTop:10
    },
    ContainerEvento:{
        backgroundColor:'#FFFFFF',
        flex:1,
        borderTopEndRadius:50,
        borderTopStartRadius:50,
        marginTop:10,
    },
    containerImagen:{
        width:59,
        height:59,
        borderRadius:100,
        backgroundColor:'#093C5D',
        alignItems:'center',
        justifyContent:'center',
    },
    textEvento:{
        color:'#303030',
        fontSize:16,
        fontWeight:'500',
        lineHeight:16.41,
        marginTop:10
    },
    textUserEvento:{
        color:'#303030',
        fontSize:14,
        fontWeight:'300',
        lineHeight:16.41
    },
    TextVacio:{
        fontWeight:'400',
        fontSize:20.75,
        lineHeight:24.58,
        textAlign:'center',
        marginTop:50,
    }
});