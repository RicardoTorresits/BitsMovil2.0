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
        marginTop:10
    },
    containerUser:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        alignItems:'center',
        borderTopStartRadius:50,
        borderTopEndRadius:50,
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
    },
    ContianerPublicaion:{
        paddingHorizontal:'15%',
        marginTop:'5%'
    },
    title:{
        color:'#093C5D',
        fontSize:16.67,
        lineHeight:19.53,
        fontWeight:'500'
    },
    textInput:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        color:'#303030'
    },
    containerMasterButton:{
        height:'30%',
        width:'100%'
    },
    ContainerButtonCamara:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        height:'5%'
    },
    ButtonCamaraGaleria:{
        backgroundColor:'white',
        borderColor:'#D8D8D8',
        width:47,
        height:47,
        borderRadius:10,
        borderWidth:1.04,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'5%'
    },
    containerButon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
    },
    Button:{
        justifyContent:'center',
        alignItems:'center',
        height:'60%',
        width:'30%',
        borderRadius:21,
        marginHorizontal:'3%'
    },
    ButtonText:{
        fontSize:17,
        fontWeight:'700',
        lineHeight:20
    }
});