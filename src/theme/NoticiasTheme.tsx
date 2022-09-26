import { StyleSheet, ImageBackground } from 'react-native';

export const styles = StyleSheet.create({

    container:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:25,
        marginVertical:5,
        paddingHorizontal:'7%',
        paddingTop:'5%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    containerUser:{
        flexDirection:'row',
    },
    containerDatos:{
        marginLeft:5,
        marginTop:5
    },
    textTitle:{
        width:158,
        height:39,
        fontWeight:'500',
        fontSize:16,
        lineHeight:18.75,
        color:'#303030'
    },
    text:{
        width:72,
        height:34,
        fontWeight:'300',
        fontSize:12,
        lineHeight:14.05,
        marginTop:-20,
        color:'#303030'
    },
    containePublicacion:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        //paddingHorizontal:'3%',
    },
    CotainerButtons:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
    },
    image:{
        width:46,
        height:46,
        borderRadius:100
    },
    imageNoticias:{
        width:'100%',
        height:500,
        alignItems:'center',
        marginTop:10,
        marginBottom:20, 
    },
    textNoticia:{
        color:'#303030'
    },
    icon:{
        marginHorizontal:25
    },loading:{
        backgroundColor:'white',
        height:300,
        marginTop:20
    },
    buttonNoticia:{
        backgroundColor:'#F7B801',
        width:45,
        height:45,
        top:'77%',
        left:'85%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        position:'absolute',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    imageButton:{
        width:21.66,
        height:21.66
    }
    
});