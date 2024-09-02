import useInterceptors from './interceptors';

const useApi = () => {
    const interceptor = useInterceptors();
   
    const api = {
        // login
        adminLogin: (data, params = {}) => interceptor.post(`/user/dashboard/api/login/`, data, { params: params, NxtbnPublicAPI: true }),
        refreshToken: (data, params = {}) => interceptor.post(`/user/dashboard/api/token/refresh/`, data, { params: params, NxtbnPublicAPI: true }),
        adminLogout: (data, params = {}) => interceptor.post(`/user/dashboard/api/logout/`, data, { params: params }),
        pluginInstall: (data, params={}) => interceptor.post(`/plugins/dashboard/api/plugin-install-via-zip-url/`, data, {params : params}),

        // product
        createCategory: (data, params = {}) => interceptor.post(`/product/dashboard/api/categories/`, data, { params: params }),
        getCategories: (params = {}) => interceptor.get(`/product/dashboard/api/categories/`, { params: params }),
        getRecursiveCategories: (params = {}) => interceptor.get(`/product/dashboard/api/recursive-categories/`, {params: params}),
        getCategoryByParent: (id='none', params = {}) => interceptor.get(`/product/dashboard/api/categories-by-parent/${id}/`, { params: params }),

        createProduct: (data, params = {}) => interceptor.post(`/product/dashboard/api/products/`, data, { params: params }),
        getProducts: (page, params = {}) => interceptor.get(`/product/dashboard/api/products/?page=${page}`, { params: params }),
        getProductById: (id, params = {}) => interceptor.get(`/product/dashboard/api/products/${id}/`, { params: params }),
        deleteProduct: (id, params = {}) => interceptor.delete(`/product/dashboard/api/products/${id}/`, { params: params }),
        updateProduct: (id, data, params = {}) => interceptor.put(`/product/dashboard/api/products/${id}/`, data, { params: params }),

        getColor: (params = {}) => interceptor.get(`/product/dashboard/api/colors/`, { params: params }),
        createColor: (data, params = {}) => interceptor.post(`/product/dashboard/api/colors/`, data, { params: params }),
        deleteColor: (id, params = {}) => interceptor.delete(`/product/dashboard/api/colors/${id}/`, { params: params }),
        getColorById: (id, params = {}) => interceptor.get(`/product/dashboard/api/colors/${id}/`, { params: params }),
        updateColor: (id, data, params = {}) => interceptor.put(`/product/dashboard/api/colors/${id}/`, data, { params: params }),

        createProductType: (data, params = {}) => interceptor.post(`/product/dashboard/api/product-types/`, data,  {params: params}),
        getProductType: (params = {}) => interceptor.get(`/product/dashboard/api/product-types/`, {params: params}),
        deleteProductType: (id, params = {}) => interceptor.delete(`/product/dashboard/api/product-types/${id}/`, {params: params}),
        updateProductType: (id, data, params = {}) => interceptor.put(`/product/dashboard/api/product-types/${id}/`, data, {params: params}),
        getProductTypeById: (id, params = {}) => interceptor.get(`/product/dashboard/api/product-types/${id}/`, {params: params}),

        createProductTags: (data, params = {}) => interceptor.post(`/product/dashboard/api/product-tags/`, data,  {params: params}),
        getProductTags: (params = {}) => interceptor.get(`/product/dashboard/api/product-tags/`, {params: params}),

        getCollections: (params = {}) => interceptor.get(`/product/dashboard/api/collections/`, {params: params}),
        createCollection: (data, params = {}) => interceptor.post(`/product/dashboard/api/collections/`, data, {params: params}),
        deleteCollection: (id, params = {}) => interceptor.delete(`/product/dashboard/api/collections/${id}/`, {params: params}),
        getCollectionById: (id, params = {}) => interceptor.get(`/product/dashboard/api/collections/${id}/`, {params: params}),
        updateCollection: (id, data, params = {}) => interceptor.put(`/product/dashboard/api/collections/${id}/`, data, {params: params}),

        deleteVariant: (id, params = {}) => interceptor.delete(`/product/dashboard/api/variants/${id}/`, {params: params}),

        // order
        getOrderList: (params = {}) => interceptor.get(`/order/dashboard/api/orders/`, { params: params }),

        // analytics
        getBasicStats: (params = {}) => interceptor.get(`/order/dashboard/api/stats/`, { params: params }),


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
