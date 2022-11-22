import React,{ createContext, useEffect, useReducer, useState } from 'react';
import { AuthReducer, AuthState } from './AuthReducer';
import auth from '@react-native-firebase/auth'

import {
    GoogleSignin,
  } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bitsApi from '../../api/bitsApi';
import appleAuth from '@invertase/react-native-apple-authentication';


GoogleSignin.configure({
    webClientId:"1060099751666-686qlsca12r7pnd5543hrnbs8gaj1d9p.apps.googleusercontent.com",
    iosClientId:'1060099751666-0ebv025ht3v8si76ma4j9h1obms10sgn.apps.googleusercontent.com'
});

type AuthContextProps = {
    AuthLogin:string;
    Auth:string;
    user:any;
    Nombre:any;
    token:string|null;
    modalVisible:boolean;
    status: 'checking'|'autheticated'|'not-autheticated';
    emailLogIn:() => void; 
    recoveryAcount : () => void;
    goBackStart:() => void;
    logIn:() => void;
    logInEmail:() => void;
    logInGoogle:() => void;
    logInApple:() => void
    logOut:() => void;
    logInchange:() => void;
    ModalCloseOrOpen:() => void;
}

const authInitialState : AuthState ={
    status:'checking',
    token:null,
    user:null,
    errorMesage:''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({children}:any) => {


    useEffect(() => {
      checkToken();
    }, [])

    const checkToken  = async () =>{
        const token = await AsyncStorage.getItem('token');
        console.log(token)

        // no hay token
        if(!token) return dispatch({type:'no-authenticated'});

        //si hay token 
    }
    

    const [AuthLogin, setAuthLogin] = useState('home')
    const [Nombre, setNombre] = useState()
    const [Auth, setAuth] = useState('false')
    const [state, dispatch] = useReducer(AuthReducer, authInitialState);
    const [modalVisible, setModalVisible] = useState(false)

    const emailLogIn = () => {
        setAuthLogin('Email')
    }

    const recoveryAcount = () => {
        setAuthLogin('recovery')
    }

    const goBackStart = () => {
        setAuthLogin('home')
    }
    const logIn = () =>{
        setAuth('true')
    }
    const logInchange = () =>{
        setAuth('false')
    }

    const ModalCloseOrOpen = () => {
        setModalVisible(!modalVisible)
    }

    const logInEmail = async () => {

    }

    const logInApple = async () => {
        try {
            if(Auth ==='true'){
                const appleAuthRequestResponse = await appleAuth.performRequest({
                    requestedOperation:appleAuth.Operation.LOGIN,
                    requestedScopes:[appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
                });
                try {
                    
                } catch (error) {
                    console.log(error)
                }
            }else {
                ModalCloseOrOpen();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logInGoogle = async () =>{
        try{

            if(Auth==='true'){
                const {idToken,user} = await GoogleSignin.signIn();
                    const googleCredetial = auth.GoogleAuthProvider.credential(idToken);
                    auth().signInWithCredential(googleCredetial);
                    const email = user.email;
                    const nombre = user.name;
                    const PrimerNombre=user.givenName?.split(' ');
                    setNombre(PrimerNombre[0])
                    try {   
                        const resp = await bitsApi.put('/auth/googleApp',{email,nombre})
                        dispatch({
                            type:'singUp',
                            payload:{
                                user:resp.data.result,
                                token:resp.data.token
                            } 
                        });
                        await AsyncStorage.setItem('token',resp.data.token)
                        //await AsyncStorage.setItem('url',resp.data.url)
                    } catch (error) {
                     console.log(error)   
                    }
            }else{
                ModalCloseOrOpen();
            }
        }catch(error:any){
            console.log(error)
        }
    }
    const logOut = async () =>{
        try {
            await GoogleSignin.signOut();
            dispatch({type:'logOut'})
        }catch(error){
            console.log(error)
        }
        
    }

    return (
        <AuthContext.Provider value ={{
            ...state,
            AuthLogin,
            Auth,
            Nombre,
            modalVisible,
            emailLogIn,
            recoveryAcount,
            goBackStart,
            logIn,
            logInchange,
            logInGoogle,
            logInApple,
            logInEmail,
            logOut,
            ModalCloseOrOpen,
        }}>
            {children}
        </AuthContext.Provider>
    )

}