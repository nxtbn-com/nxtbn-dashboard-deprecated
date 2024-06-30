import useInterceptors from './interceptors';

const useApi = () => {
    const interceptor = useInterceptors();
   
    const api = {
        adminLogin: (data, params = {}) => interceptor.post(`/user/dashboard/api/login/`, data, { params: params, NxtbnPublicAPI: true }),
        refreshToken: (data, params = {}) => interceptor.post(`/user/dashboard/api/token/refresh/`, data, { params: params, NxtbnPublicAPI: true }),
        adminLogout: (data, params = {}) => interceptor.post(`/user/dashboard/api/logout/`, data, { params: params }),
        getCategories: (params = {}) => interceptor.get(`/product/dashboard/api/categories/`, { params: params }),
        pluginInstall: (data, params={}) => interceptor.post(`/plugins/dashboard/api/plugin-install-via-zip-url/`, data, {params : params}),

        // product
        createProduct: (data, params = {}) => interceptor.post(`/product/dashboard/api/products/`, data, { params: params }),
    };

    return api;
}

export default useApi;
