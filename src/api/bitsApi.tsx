import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const baseURL = 'http://3.145.81.109:4003/api';

const bitsApi  = axios.create({
    baseURL
});


// bitsApi.interceptors.request.use(    
//     async(config:any) => {
//         const token = AsyncStorage.getItem('token');
//         if (token){
//            config.headers['x-token'] = token         
//         }
//         return config;
//     }
// );

// bitsApi.interceptors.request.use(
//   async(config:any)=>{
//     const baseURL = AsyncStorage.getItem('url');
//     if(baseURL != baseURL){
//       config.url=baseURL
//     }
//     return config;
//   }
// )


export default bitsApi
