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
        marginTop:10
    },
    textDate:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'500',
        lineHeight:21.09,
        textAlign:'center',
        marginTop:10
    },
    ContainerDate:{
        backgroundColor:'#FFFFFF',
        flex:1,
        borderTopEndRadius:50,
        borderTopStartRadius:50,
        marginTop:10
    }
    
});