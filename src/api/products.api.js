import api from "./axios"
// Get all products
export const getAllProducts = (params) => {
    return api.get('/products', { params })
}
// Create products by admin
export const createProducts = (payload) => {
    return api.post('/products',payload)
}
// search products
export const searchProducts = (params) => {
    return api.get('/products/search',{params})
}
//det single product
export const getSingleProduct = (productid) => {
    return api.get(`/products/${productid}`)
}
// delete products by admin
export const deleteProducts = (productid) => {
    return api.delete(`/products/${productid}`)
}
//update products
export const updateProducts =(productid)=>{
    return api.patch(`/products/update/${productid}`)
}

