
import axios from 'axios';
import Cookies from 'js-cookie';



export const NXTBN_API_URL = process.env.NXTBN_API_URL || "http://127.0.0.1:8000/"


const useInterceptors = () => {
    const instance = axios.create({
        baseURL:NXTBN_API_URL,
        timeout: 10000,
    });

    instance.defaults.timeout = 10000;
    instance.defaults.headers.common['Content-Type'] = 'application/json';
    instance.defaults.headers.common['Accept'] = 'application/json';

    instance.interceptors.request.use(
        config => {
            const accessToken = Cookies.get('accessToken');
            if(accessToken){
                config.headers['Authorization'] =  "Bearer "+ accessToken;
            }
            return config
        },
        error => {
            Promise.reject(error)
        }
    )


    instance.interceptors.response.use(
        response => {
            return response.data
        },
        error => {
            if(error.response.status === 500) {
                var normalizedError = { 
                    response: {
                        data: {
                            'server': ["Standard: Internal Server Error",]
                        }
                    }
                }
                return Promise.reject(normalizedError)
            }
            else if(error.response.status === 403) {

            }
            else if(error.response.status === 404) {
        
            }
            else if(error.response.status === 400) {
        
            }
            else if(error.response.status === 409) {
        
            }
            else if(error.response.status === 401){
                // localStorage.clear()
                // deleteAllCookies();  
            }
            return Promise.reject(error)
            }
    );

    return (instance);

}

export default  useInterceptors;