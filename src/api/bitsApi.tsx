import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const baseURL = 'http://3.144.118.244:5004/api';

const bitsApi  = axios.create({
    baseURL
});


//bitsApi.interceptors.request.use(
    
  //  async(config:any) => {
  //      const token = AsyncStorage.getItem('token');
  //      if (token){
  //         config.headers['x-token'] = token;
   //     }
     //   return config;
   // }
//);


export default bitsApi