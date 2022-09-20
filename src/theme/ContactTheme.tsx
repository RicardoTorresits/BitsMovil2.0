import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:50,
        marginTop:20
    },
    buttonInActive:{
        backgroundColor:'#093C5D',
        height:55.14,
        width:120,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonActive:{
        backgroundColor:'#F7B801',
        height:55.14,
        width:120,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'700',
        lineHeight:18
    },
    constainerMaster:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    cardContainer:{
        width:354.28,
        marginTop:10,
        height:82,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    Image:{
        width:82,
        height:'100%',
        borderRadius:100,
        justifyContent:'flex-start'
    },
    containerText:{
        marginLeft:10
    },
    containerIcon:{
        position:'absolute',
        justifyContent:'flex-end',
        left:285
    },
    Icon:{
        height:45,
        width:45
    },
    title:{
        color:'#093C5D',
        fontSize:14,
        fontWeight:'500',
        lineHeight:16.41,
    }
});