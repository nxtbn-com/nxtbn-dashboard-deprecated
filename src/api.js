import useInterceptors from './interceptors';

const useApi = () => {
    const interceptor = useInterceptors();
   
    const api = {
        // login
        adminLogin: (data, params = {}) => interceptor.post(`/user/dashboard/api/login/`, data, { params: params, NxtbnPublicAPI: true }),
        refreshToken: (data, params = {}) => interceptor.post(`/user/dashboard/api/token/refresh/`, data, { params: params, NxtbnPublicAPI: true }),
        adminLogout: (data, params = {}) => interceptor.post(`/user/dashboard/api/logout/`, data, { params: params }),
        getCategories: (params = {}) => interceptor.get(`/product/dashboard/api/categories/`, { params: params }),
        pluginInstall: (data, params={}) => interceptor.post(`/plugins/dashboard/api/plugin-install-via-zip-url/`, data, {params : params}),

        // product
        createProduct: (data, params = {}) => interceptor.post(`/product/dashboard/api/products/`, data, { params: params }),
        getColor: (params = {}) => interceptor.get(`/product/dashboard/api/colors/`, { params: params }),
        createColor: (data, params = {}) => interceptor.post(`/product/dashboard/api/colors/`, data, { params: params }),
        deleteColor: (id, params = {}) => interceptor.delete(`/product/dashboard/api/colors/${id}/`, { params: params }),
        getColorById: (id, params = {}) => interceptor.get(`/product/dashboard/api/colors/${id}/`, { params: params }),

        // file manager
        postImage: (data, params = {}) => {
            const customHeaders = {
                'Content-Type': 'multipart/form-data'
            };
            return interceptor.post(`/filemanager/dashboard/api/images/`, data, { params: params, headers: customHeaders });
        },
        getImages: (page=1, params = {}) => interceptor.get(`/filemanager/dashboard/api/images/?page=${page}`, { params: params }),
        deleteImage: (id, params = {}) => interceptor.delete(`/filemanager/dashboard/api/image/${id}/`, { params: params }),
    };
    
    return api;
}

export default useApi;
