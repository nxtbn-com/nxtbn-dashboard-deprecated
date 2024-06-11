import useInterceptors from './interceptors';

const useApi = () => {
    const axios = useInterceptors();
   
    const api = {
        adminLogin: (data, params={}) => axios.post(`user/dashboard/api/login/`, data, {
            params : params,
            headers:  { 'skip-authorization': true }
        }),

        refreshToken: (data, params={}) => axios.post(`user/dashboard/api/token/refresh/`, data, {
            params : params,
            headers:  { 'skip-authorization': true }

        }),
        adminLogout: (data, params={}) => axios.post(`user/dashboard/api/logout/`, data, {params : params}),
    };

    return api;
}

export default  useApi;