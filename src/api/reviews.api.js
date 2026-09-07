import api from "./axios"
// Get product reviews
export const getProductReviews = (productId) => {
    return api.get(`/products/${productId}/reviews`)
}
// Add review to product
export const addProductReview = (productId, payload) => {
    return api.post(`/products/${productId}/reviews`, payload)
}
// Delete product review
export const deleteProductReview = (productId, reviewId) => {
    return api.delete(`/products/${productId}/reviews/${reviewId}`)
}
