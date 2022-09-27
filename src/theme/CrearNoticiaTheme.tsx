import { StyleSheet } from "react-native";
import { Border } from "victory-native";

export const styles = StyleSheet.create({
    containerMaster:{
        backgroundColor:'#093C5D',
        flex:1,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        alignItems:'center',
    },
    textContainer:{
        color:'#FFFFFF',
        fontWeight:'500',
        fontSize:18,
        lineHeight:21.09,
        marginTop:15
    },
    container:{
        backgroundColor:'#FFFFFF',
        flex:1,
        width:'100%',
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        alignItems:'center',
        marginTop:10
    },
    UserImg:{
        width:47,
        height:47,
        borderRadius:100,
        marginTop:20
    },
    textUser:{
        color:'#093C5D',
        fontWeight:'500',
        fontSize:16,
        lineHeight:18.75,
        marginTop:10
    }
});