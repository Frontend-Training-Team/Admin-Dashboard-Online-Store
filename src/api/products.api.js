import api from "./axios"

// Get all products
export const getAllProducts = (payload) => { return api.get('/products', payload) }
// Create product (Admin)
export const postCreateProductAdmin = (payload) => { return api.post('/products', payload) }
// search products
export const getSearchProducts = (payload) => { return api.get('/products/search', payload) }
// get single product
export const getSingleproduct = (productid) => { return api.get(`/products/${productid}`) }
// Delete product (Admin)
export const deleteProductAdmin = (productid) => { return api.delete(`/products/${productid}`) }
// update product (Admin)
export const patchUpdateProductAdmin = (productid) => { return api.patch(`/products/update/${productid}`) }
