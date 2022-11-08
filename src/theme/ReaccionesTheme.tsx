import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        backgroundColor:'#FFFFFF',
        flex:1,
        width:'100%',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,

    },
    containerReacciones:{
        width:'100%',
        //backgroundColor:'red',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:'5%'
    },
    containerReaccionesTotales:{
        width:'100%',
        flex:15,
        //backgroundColor:'red',
    },
    text:{
        color:'#303030',
        fontWeight:'500',
        fontSize:14,
        lineHeight:16.41
    },
    img:{
        height:50,
        width:50,
        borderRadius:100,
    },
    sombraimg:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    ContainerDatos:{
        flexDirection:'row',
        paddingLeft:'8%',
        marginTop:'3%',
        justifyContent:'space-between',
        alignContent:'flex-start'
    },
    textContainer:{
        marginTop:'2%',
        //backgroundColor:'red',
        width:'70%'
    },
    imgReacion:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:'3%',
        marginRight:'5%'
    }
    
});