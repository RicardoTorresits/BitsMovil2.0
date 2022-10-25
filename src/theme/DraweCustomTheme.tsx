import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#093C5D',
        alignItems:'flex-start'
    },
    avatarContainer:{
        backgroundColor:'white',
        //borderBottomStartRadius:100,
        borderBottomLeftRadius:100,
        width:'100%',
        height:90,
        flexDirection:'row',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
    },
    imageContainer:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'#FACB3E',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-5,
        marginLeft:30
    },
    Image:{
        width:56,
        height:56,
        borderRadius:100
    },
    Text:{
        fontSize:25,
        fontWeight:'500',
        color:'#093C5D',
        marginLeft:30
    },
    optionsActive:{
        backgroundColor:'rgba(255,255,255,0.8)',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
        height:38,
        width:200,
        marginRight:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        //right:30
    },
    optionsInActive:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
        height:38,
        width:200,
        marginRight:30,
        //right:30
    },
    activeText:{
        color:'#093C5D',
        fontSize:18,
        fontWeight:'500',
        marginLeft:10
    },
    inactiveText:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'500',
        marginLeft:10
    },
    buttonContainer:{
        //position:'absolute',
        backgroundColor:'white',
        justifyContent:'center',
        top:'65%',
        //marginTop:600,
        width:'100%',
        height:'20%',
        borderTopEndRadius:75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    buttom:{
        position:'absolute',
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        //bottom:0,
        width:'100%',
        height:65.85,
        borderTopEndRadius:75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    icon:{
        width:30,
        height:31
    },
    textButtom:{
        marginTop:5,
        marginLeft:10,
        color:'#093C5D',
        fontSize:16,
        fontWeight:'500'
    },
    lastText:{
        color:'#558AAC',
        fontWeight:'500',
        fontSize:18,
        marginLeft:30,
        top:470,
    },
    avisoDePrivacidad:{
        position:'absolute',
        fontSize:14,
        fontWeight:'500',
        color:'#558AAC',
        lineHeight:16.41,
        bottom:'15%',
        left:'20%'
    }
});