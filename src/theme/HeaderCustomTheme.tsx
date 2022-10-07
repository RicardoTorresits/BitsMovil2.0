import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    
    container:{
        backgroundColor:'#093C5D',
        flexDirection:'column',
        borderBottomStartRadius:50,
        width:'100%',
        height:160,
        alignItems:'center',
    },
    subContianer:{
        backgroundColor:'#093C5D',
        flexDirection:'row',
        borderBottomStartRadius:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10
    },
    DraweButton:{
        marginLeft:30,
        width:50,
        height:50,
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
    },
    Image:{
        width:46,
        height:46,
        borderRadius:100
    },
    Text:{
        color:'#FFFFFF',
        fontSize:26,
        fontWeight:'400',
        marginLeft:-4,
        lineHeight:24

    },
    IconContainer:{
        width:29,
        height:35,
        marginTop:2,
        marginRight:20
    },
    Icon:{
        width:19,
        height:25
    },
    textInput:{
        backgroundColor:'#FFFFFF',
        width:350.59,
        height:50,
        borderRadius:50,
        marginLeft:10,
        paddingLeft:20
    }

});